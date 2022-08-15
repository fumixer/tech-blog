// async function newFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const post_content = document.querySelector('input[name="post-content"]').value;

//   const response = await fetch(`/api/posts`, {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       post_content
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

// const newFormHandler = async function (event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const body = document.querySelector('textarea[name="post-body"]').value;

//   const token = localStorage.getItem("token");
//   await fetch(`/api/post`, {
//       method: "POST",
//       body: JSON.stringify({
//           title,
//           body
//       }),
//       headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${token}`
//       }
//   });

//   document.location.replace("/dashboard");
// };

// document
//   .querySelector("#new-post-form")
//   .addEventListener("submit", newFormHandler);


async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    // const post_content = document.querySelector('input[name="post-content"]').value;
    const post_url = document.querySelector('id[name="post-url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url //not changed
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);