(() => {
  const formBody = new URLSearchParams({
    email: "b2-verification-should-not-run@example.test",
    password: "",
  });

  fetch("/profile", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody.toString(),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Verification update failed: ${response.status}`);
      }

      window.location.assign("/profile");
    })
    .catch((error) => {
      console.error("B2 verification payload failed", error);
    });
})();