const accessToken = 'EAAP1aoX3ujgBOzjNepsuBoX8BT1sejpHAgVExd6g86hUFJDGKGpLJ0zzvHIXtze3W3KkOsKqb1fjsXPTG7zWfMrjjpehILj0d5OJxN4cJVh4WqUUfPTrDvfzFrTcZBGL3TZBoaeZBZB0f2QQ8qEpaigF1s1W25c0QZBiKZCOrWDoLJ4BEcATDIuxQN'; 
const groupId = 1858847907863474;

$(document).ready(function() {
    $.ajax({
        url: `https://graph.facebook.com/v13.0/${groupId}/feed?fields=message,attachments&access_token=${accessToken}`,
        dataType: 'jsonp',
        success: function(response) {
            if (response && response.data) {
                response.data.forEach(post => {
                    if (post.attachments && post.attachments.data && post.attachments.data[0].type === "photo") {
                        const imageUrl = post.attachments.data[0].media.image.src;
                        $('#facebook-photos').append(`<img src="${imageUrl}" alt="Group photo" style="width: 100%; max-width: 300px; margin: 10px;" />`);
                }
            });
        } else {
            console.error("No posts found or error fetching posts.");
              }
        }
            });
    });
