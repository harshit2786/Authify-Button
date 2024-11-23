export const loginWithMicrosoft = async (
    appId,
    handleFunc = async() => {
      return null;
    },
    setLoader,
    baseURL
  ) => {
    if (!appId || !baseURL) {
      return;
    }
    setLoader(true);
    const popup = window.open(
      `${baseURL}/v1/auth?id=${appId}`,
      "popup",
      "width=600,height=600"
    );
    if (!popup) {
        console.error("Popup window could not be opened.");
        setLoader(false);
        return;
      }

      const checkPopupClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkPopupClosed);
          setLoader(false); // Stop the loader
        }
      }, 500);
      window.addEventListener("message", async (event) => {
        if (event.origin !== `${baseURL}`) {
          return;
        }
    
        try {
          await handleFunc(event.data);
        } catch (e) {
          console.error(e);
        } finally {
          if (!popup.closed) {
            popup.close();
          }
        }
      });
  };
  