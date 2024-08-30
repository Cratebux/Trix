// Fetch votes on window load
// send a post request to vote

let modal = document.querySelector('.modal');
let tonBtn = document.querySelectorAll('.ton');
let notCoinBtn = document.querySelectorAll('.notCoin');
let modalClose = document.querySelector('.modalClose');

const VOTE_URL = 'https://app.trix.com.ng/api/vote';
const RESULT_URL = 'https://app.trix.com.ng/api/vote/results';

window.onload = function () {
  fetchVotes();
};

tonBtn.addEventListener('click', () => handleVote('tonCoin'));
notCoinBtn.addEventListener('click', () => handleVote('notCoin'));

modalClose.addEventListener('click', () => {
  modal.close();
  setTimeout(() => {
    window.location.href = '/waitlist/wallet.html';
  }, 2000);
});

async function fetchVotes() {
  // const myHeaders = new Headers();
  const formdata = new FormData();

  const requestOptions = {
    method: 'GET',
    // headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(RESULT_URL, requestOptions);
    const result = await response.json();

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const tonVotes = result?.data.data.tonVotes;
    const notcoinVotes = result?.data.data.notcoinVotes;

    const totalVotes = tonVotes + notcoinVotes;
    const tonPercentage = totalVotes
      ? ((tonVotes / totalVotes) * 100).toFixed(2)
      : 0;
    const notcoinPercentage = totalVotes
      ? ((notcoinVotes / totalVotes) * 100).toFixed(2)
      : 0;
    document.querySelector('.tonVal').innerHTML = `${tonPercentage}%`;

    document.querySelector('.notCoinVal').innerHTML = `${notcoinPercentage}%`;
  } catch (error) {
    console.error('Error fetching votes:', error);
    alert(
      'An unexpected error occurred while fetching votes. Please try again later.'
    );
  }
}

async function handleVote(voteOption) {
  tonBtn.disabled = true;
  notCoinBtn.disabled = true;

  const formdata = new FormData();
  formdata.append('option', voteOption);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch(VOTE_URL, requestOptions);
    const result = await response.json();

    if (response.ok) {
      modal.showModal();
    } else {
      alert('Error uploading data: ' + result);
    }
  } catch (error) {
    console.error('Error uploading data:', error);
    alert('An unexpected error occurred. Please try again later.');
  }
}
console.log("Hello World");

