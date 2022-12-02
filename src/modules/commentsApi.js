const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j26xtAx7qVMwcqU9i8K3/comments/';

async function postComment({ showId, name, comment }) {
  const response = await fetch(commentsUrl, {

    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: showId, username: name, comment }),

  });

  await response.json();
}

async function getComments(showID) {
  try {
    const response = await fetch(`${commentsUrl}?${new URLSearchParams({
      item_id: showID,
    })}`);

    if (!response.ok) {
      await Promise.reject(new Error(response.status.toString()));
    } else {
      return await response.json();
    }
  } catch (e) {
    // console.log('asd', e);
    // throw new Error('Comment doesnt exist');
  }
  return [];
}

export { postComment, getComments };
