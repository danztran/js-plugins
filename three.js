const jwtDecode = require('jwt-decode');

const decoded = jwtDecode(
  'eyJhbGciOiAiRVMyNTYifQ.eyJwaWN0dXJlIjogImh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tOVZMWWVZM0xCV28vQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbV9EQVU0dmxFU21LcmNmSEJwYXBkcnlBb3FtUS9zOTYtYy9waG90by5qcGciLCAic3ViIjogIjExNDk3NjM2MDQ5NTI5NjY2NTEwNCIsICJncm91cHMiOiBbImFiY2RAY2hvdG90LnZuIiwgImFkbWluLXN1cGVyc2V0QGNob3RvdC52biIsICJjdC1hZC1yZXZpZXctZGV2QGNob3RvdC52biIsICJjdGZAY2hvdG90LnZuIiwgImRhbS1jaG90b3QtdmVoLWJ1c2luZXNzYW5hbHlzdEBjaG90b3Qudm4iLCAiZGV2QGNob3RvdC52biIsICJmYW1pbHlAY2hvdG90LnZuIiwgInByb3RlY3RAY2hvdG90LnZuIiwgInNxdWFkLWdhbW1hQGNob3RvdC52biIsICJzcmVAY2hvdG90LnZuIl0sICJpYXQiOiAxNjE4NDc4OTg5LCAiZW1haWxfdmVyaWZpZWQiOiB0cnVlLCAiZXhwIjogMTYxODQ4MjU4OCwgImdpdmVuX25hbWUiOiAibmd1eWVudHJhbmJhbyIsICJuYW1lIjogIm5ndXllbnRyYW5iYW8iLCAibmJmIjogMTYxODQ3ODk4OSwgInByb2dyYW1hdGljIjogZmFsc2UsICJhdGkiOiAiNTgzY2Y5YmQ3ZWRkZTE1NyIsICJlbWFpbCI6ICJuZ3V5ZW50cmFuYmFvQGNob3RvdC52biIsICJpc3MiOiAiYXV0aC1jZS5jaG90b3Qub3JnIiwgImF1ZCI6IFsiYXV0aC1jZS5jaG90b3Qub3JnIiwgInBvbWVyaXVtLXRlc3QuY2hvdG90Lm9yZyJdfQ.9QCTk8Xq02b4WPTS9O8efoPg0cRLzdw-yMg4Ir62pdfZ9aVZP5afYwwURvNGDjXGHxS9f6cwCZHfQxMNl3UU4Q',
);

console.log(decoded.email);
