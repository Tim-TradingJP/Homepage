//const accessToken =
//  "EAAP1aoX3ujgBOzjNepsuBoX8BT1sejpHAgVExd6g86hUFJDGKGpLJ0zzvHIXtze3W3KkOsKqb1fjsXPTG7zWfMrjjpehILj0d5OJxN4cJVh4WqUUfPTrDvfzFrTcZBGL3TZBoaeZBZB0f2QQ8qEpaigF1s1W25c0QZBiKZCOrWDoLJ4BEcATDIuxQN";
//const groupId = 1858847907863474;

//$(document).ready(function () {
//  $.ajax({
//    url: `https://graph.facebook.com/v13.0/${groupId}/feed?fields=message,attachments&access_token=${accessToken}`,
//    dataType: "jsonp",
//    success: function (response) {
//      if (response && response.data) {
//        response.data.forEach((post) => {
//          if (
//            post.attachments &&
//            post.attachments.data &&
//            post.attachments.data[0].type === "photo"
//          ) {
//            const imageUrl = post.attachments.data[0].media.image.src;
//            $("#facebook-photos").append(
//             `<img src="${imageUrl}" alt="Group photo" style="width: 100%; max-width: 300px; margin: 10px;" />`
//            );
//          }
//        });
//      } else {
//       console.error("No posts found or error fetching posts.");
//      }
//    },
//  });

let collapse_button1 = document.querySelector(".collapse-button1");
collapse_button1.addEventListener("click", () => {
  hideTable(collapse_button1);
  rotatePicture(collapse_button1);
});

let collapse_button2 = document.querySelector(".collapse-button2");
collapse_button2.addEventListener("click", () => {
  hideTable(collapse_button2);
  rotatePicture(collapse_button2);
});

let collapse_button3 = document.querySelector(".collapse-button3");
collapse_button3.addEventListener("click", () => {
  hideTable(collapse_button3);
  rotatePicture(collapse_button3);
});

let collapse_button4 = document.querySelector(".collapse-button4");
collapse_button4.addEventListener("click", () => {
  hideTable(collapse_button4);
  rotatePicture(collapse_button4);
});

function hideTable(collapse_button) {
  console.log("hello world");
  let tbody =
    collapse_button.parentElement.parentElement.parentElement.querySelector(
      "tbody"
    );
  if (tbody.style.display !== "table-row-group") {
    //to access the CSS properties of an HTML element, use .style.property -> i.e. element.style.height
    tbody.style.display = "table-row-group";
  } // CSS properties need to be strings
  else {
    tbody.style.display = "none";
  }
}

function rotatePicture(collapse_buttonID) {
  let picture = collapse_buttonID.querySelector("img");
  if (picture.style.transform !== "rotate(180deg)") {
    picture.style.transform = "rotate(180deg)";
  } else {
    picture.style.transform = "rotate(0deg)";
  }
}
