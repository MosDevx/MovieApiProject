const involveUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j26xtAx7qVMwcqU9i8K3/likes/';

async function postLike(showId) {
  const response = await fetch(involveUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: showId }),
  });

  await response.json();
}

// get the total of likes from the API
async function getLikes() {
  const response = await fetch(involveUrl);

  return response.json();
}

export { postLike, getLikes };