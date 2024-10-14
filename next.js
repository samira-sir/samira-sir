const username = localStorage.getItem('username');
const subjects = JSON.parse(localStorage.getItem('subjects')); // Retrieve subjects as an array


const redirects = {
  '6-history': 'https://us05web.zoom.us/j/83565928302?pwd=bOB4fNS7ZhaN2S2mhu2GLGz1k7HWtB.1',
  '6-geography': 'https://us05web.zoom.us/j/89416985234?pwd=UdrHeyZQbd0pd9Sq8fg06iBIeaeQkt.1',
  '6-civic': 'https://us05web.zoom.us/j/83756325516?pwd=ces9kVscsxkPnW9tzkisc2MtmoYzAg.1',
  '7-history': 'https://us05web.zoom.us/j/83514989103?pwd=Yg7mCvLzSUl1Q8HboNAatbCaNsBokg.1',
  // Add more Zoom links here
};

// Function to filter video links based on the user's subjects
function getRelevantVideos(userSubjects) {
  return videoLinks.filter(video => 
    userSubjects.some(subject => 
      subject.grade === parseInt(video.class) && subject.name.toLowerCase() === video.subject.toLowerCase()
    )
  );
}

// Display video and Zoom buttons grouped by month
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Function to group videos and links by month
function groupByMonth(month) {
  // Get relevant videos based on the user's subjects
  const relevantVideos = getRelevantVideos(subjects);

  // Get the content container for the given month
  const contentContainer = document.getElementById(month);
  
  // Filter videos by month
  const monthVideos = relevantVideos.filter(video => video.month.toLowerCase().startsWith(month.toLowerCase()));

  // Clear previous content
  contentContainer.innerHTML = '';

  // Display relevant Zoom links first
  subjects.forEach(subject => {
    const key = `${subject.grade}-${subject.name.toLowerCase()}`; // e.g., '6-history'
    if (redirects[key]) {
      const box = document.createElement('div');
      box.classList.add('box');
      
      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = `Class ${subject.grade} - ${subject.name}`;

      const button = document.createElement('button');
      button.textContent = 'Join Zoom Class';
      button.onclick = () => {
        document.getElementById('videoIframe').src = redirects[key];
        document.getElementById('recordingTitle').textContent = `Zoom Class: Class ${subject.grade} - ${subject.name}`;
        scrollToIframe();
      };

      box.appendChild(title);
      box.appendChild(button);
      contentContainer.appendChild(box);
    }
  });

  // Display relevant videos below Zoom links
  monthVideos.forEach(video => {
    const box = document.createElement('div');
    box.classList.add('box');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = `${video.title} (${video.date})`;

    const button = document.createElement('button');
    button.textContent = 'Watch Recording';
    button.onclick = () => {
      document.getElementById('videoIframe').src = video.video;
      document.getElementById('recordingTitle').textContent = `Recording: ${video.title}`;
      scrollToIframe();
    };

    box.appendChild(title);
    box.appendChild(button);
    contentContainer.appendChild(box);
  });

  contentContainer.style.display = 'flex'; // Show the current month's content
}

// Function to show the selected month's content
function showMonth(month) {
  months.forEach(m => {
    document.getElementById(m).style.display = 'none'; // Hide all months
    document.getElementById(`${m}-link`).classList.remove('active'); // Remove active class
  });
  document.getElementById(month).style.display = 'flex'; // Show selected month
  document.getElementById(`${month}-link`).classList.add('active'); // Add active class
  groupByMonth(month); // Group and show content for the selected month
}

// Smooth scrolling to the iframe
function scrollToIframe() {
  const iframe = document.getElementById('videoIframe');
  const y = iframe.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

// Load the current month by default
window.onload = () => {
  const currentMonthIndex = new Date().getMonth(); // Get current month index (0 for Jan, 11 for Dec)
  const currentMonth = months[currentMonthIndex]; // Get current month name
  showMonth(currentMonth); // Show the current month
};