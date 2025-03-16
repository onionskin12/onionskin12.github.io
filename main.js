const currentUrl = window.location.href;
if (currentUrl.endsWith("/test")) {
  return new Response(JSON.stringify({ "Hello": "World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
