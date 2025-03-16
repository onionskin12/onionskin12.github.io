const currentUrl = window.location.href;
if (currentUrl.endsWith("/test")) {
  return Response.json({
    "Hello, ": "World!"
  })
}
