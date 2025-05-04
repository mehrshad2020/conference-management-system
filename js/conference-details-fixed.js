
document.addEventListener('DOMContentLoaded', function() {
 
    const registerBtn = document.getElementById('registerBtn');
    const registrationModal = document.getElementById('registrationModal');
    const closeRegistrationModal = document.getElementById('closeRegistrationModal');
    const cancelRegistration = document.getElementById('cancelRegistration');
    
    if (registerBtn && registrationModal) {
        registerBtn.addEventListener('click', function() {
            registrationModal.classList.remove('hidden');
        });
    }
    
    if (closeRegistrationModal && registrationModal) {
        closeRegistrationModal.addEventListener('click', function() {
            registrationModal.classList.add('hidden');
        });
    }
    
    if (cancelRegistration && registrationModal) {
        cancelRegistration.addEventListener('click', function() {
            registrationModal.classList.add('hidden');
        });
    }
    

    window.addEventListener('click', function(event) {
        if (event.target === registrationModal) {
            registrationModal.classList.add('hidden');
        }
    });
    
  
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
          
            // alert('Ø«Ø¨Øªâ€ŒÙ†Ø§Ù… Ø´Ù…Ø§ Ø¨Ø§ Ù…ÙˆÙÙ‚ÛŒØª Ø§Ù†Ø¬Ø§Ù… Ø´Ø¯!');/
            registrationModal.classList.add('hidden');
        });
    }
    
    
    loadConferenceData();
});

function loadConferenceData() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const conferenceId = urlParams.get('id') || '1'; 
    
    const conferenceData = getConferenceData(conferenceId);
    
    
    updateConferenceDetails(conferenceData);
}


function getConferenceData(id) {
   
    const conferences = {
        '1': {
            id: '1',
            title: 'Ù‡Ù…Ø§ÛŒØ´ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯Ù‡Ø§ÛŒ Ø¢Ù†',
            date: 'Û±Û° Ù…Ù‡Ø± Û±Û´Û°Û³',
            time: 'Û¹:Û°Û° Ø§Ù„ÛŒ Û±Û·:Û°Û°',
            location: 'Ø¯Ø§Ù†Ø´Ú©Ø¯Ù‡ Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ±',
            capacity: 'Û±Û²Û° Ù†ÙØ±',
            remainingCapacity: 'Û¶Ûµ Ù†ÙØ±',
            registrationDeadline: 'Ûµ Ù…Ù‡Ø± Û±Û´Û°Û³',
            type: 'Ø¹Ù„Ù…ÛŒ',
            typeColor: 'blue',
            image: 'https://placehold.co/1200x400/3b82f6/FFFFFF/png?text=AI+Conference',
            description: `
                <p>Ø¯Ø± Ø§ÛŒÙ† Ù‡Ù…Ø§ÛŒØ´ Ø¨Ù‡ Ø¨Ø±Ø±Ø³ÛŒ Ø¢Ø®Ø±ÛŒÙ† Ø¯Ø³ØªØ§ÙˆØ±Ø¯Ù‡Ø§ÛŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯Ù‡Ø§ÛŒ Ø¢Ù† Ø¯Ø± ØµÙ†Ø¹Øª Ùˆ Ø¢Ù…ÙˆØ²Ø´ Ù¾Ø±Ø¯Ø§Ø®ØªÙ‡ Ø®ÙˆØ§Ù‡Ø¯ Ø´Ø¯.</p>
                <p>Ù…Ø­ÙˆØ±Ù‡Ø§ÛŒ Ø§ØµÙ„ÛŒ Ù‡Ù…Ø§ÛŒØ´:</p>
                <ul>
                    <li>ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø¹Ù…ÛŒÙ‚ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯Ù‡Ø§ÛŒ Ø¢Ù†</li>
                    <li>Ù¾Ø±Ø¯Ø§Ø²Ø´ Ø²Ø¨Ø§Ù† Ø·Ø¨ÛŒØ¹ÛŒ</li>
                    <li>Ø¨ÛŒÙ†Ø§ÛŒÛŒ Ù…Ø§Ø´ÛŒÙ†</li>
                    <li>Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ø¯Ø± ØµÙ†Ø¹Øª</li>
                    <li>Ø§Ø®Ù„Ø§Ù‚ Ø¯Ø± Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ</li>
                </ul>
                <p>Ø§ÛŒÙ† Ù‡Ù…Ø§ÛŒØ´ Ø¨Ø§ Ø­Ø¶ÙˆØ± Ø§Ø³Ø§ØªÛŒØ¯ Ø¨Ø±Ø¬Ø³ØªÙ‡ Ø¯Ø§Ø®Ù„ÛŒ Ùˆ Ø¨ÛŒÙ†â€ŒØ§Ù„Ù…Ù„Ù„ÛŒ Ø¨Ø±Ú¯Ø²Ø§Ø± Ø®ÙˆØ§Ù‡Ø¯ Ø´Ø¯ Ùˆ ÙØ±ØµØª Ù…Ù†Ø§Ø³Ø¨ÛŒ Ø¨Ø±Ø§ÛŒ ØªØ¨Ø§Ø¯Ù„ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ùˆ Ø¢Ø´Ù†Ø§ÛŒÛŒ Ø¨Ø§ Ø¢Ø®Ø±ÛŒÙ† Ø¯Ø³ØªØ§ÙˆØ±Ø¯Ù‡Ø§ÛŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ ÙØ±Ø§Ù‡Ù… Ù…ÛŒâ€ŒÚ©Ù†Ø¯.</p>
            `,
            contactInfo: {
                address: 'Ø¯Ø§Ù†Ø´Ú©Ø¯Ù‡ Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ±ØŒ Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ ØªÙ‡Ø±Ø§Ù†ØŒ Ø®ÛŒØ§Ø¨Ø§Ù† Ú©Ø§Ø±Ú¯Ø± Ø´Ù…Ø§Ù„ÛŒØŒ ØªÙ‡Ø±Ø§Ù†',
                phone: 'Û°Û²Û±-Û¸Û¸Û¸Û¸Û¸Û¸Û¸Û¸',
                email: 'aiconference@example.com'
            }
        },
        '2': {
            id: '2',
            title: 'Ù‡Ù…Ø§ÛŒØ´ Ø§Ù…Ù†ÛŒØª Ø³Ø§ÛŒØ¨Ø±ÛŒ',
            date: 'Û²Ûµ Ø¢Ø¨Ø§Ù† Û±Û´Û°Û³',
            time: 'Û±Û°:Û°Û° Ø§Ù„ÛŒ Û±Û¶:Û°Û°',
            location: 'ØªØ§Ù„Ø§Ø± Ø§Ù…ÛŒØ±Ú©Ø¨ÛŒØ±',
            capacity: 'Û¸Û° Ù†ÙØ±',
            remainingCapacity: 'Û³Û² Ù†ÙØ±',
            registrationDeadline: 'Û±Ûµ Ø¢Ø¨Ø§Ù† Û±Û´Û°Û³',
            type: 'Ø¢Ù…ÙˆØ²Ø´ÛŒ',
            typeColor: 'red',
            image: 'https://placehold.co/1200x400/ef4444/FFFFFF/png?text=Security+Conference',
            description: `
                <p>Ù‡Ù…Ø§ÛŒØ´ ØªØ®ØµØµÛŒ Ø§Ù…Ù†ÛŒØª Ø³Ø§ÛŒØ¨Ø±ÛŒ Ø¨Ø§ Ù…Ø­ÙˆØ±ÛŒØª ØªÙ‡Ø¯ÛŒØ¯Ø§Øª Ø¬Ø¯ÛŒØ¯ Ùˆ Ø±Ø§Ù‡â€ŒÙ‡Ø§ÛŒ Ù…Ù‚Ø§Ø¨Ù„Ù‡ Ø¨Ø§ Ø¢Ù†Ù‡Ø§ Ù‡Ù…Ø±Ø§Ù‡ Ø¨Ø§ Ú©Ø§Ø±Ú¯Ø§Ù‡â€ŒÙ‡Ø§ÛŒ Ø¹Ù…Ù„ÛŒ.</p>
                <p>Ù…Ø­ÙˆØ±Ù‡Ø§ÛŒ Ø§ØµÙ„ÛŒ Ù‡Ù…Ø§ÛŒØ´:</p>
                <ul>
                    <li>Ø§Ù…Ù†ÛŒØª Ø´Ø¨Ú©Ù‡</li>
                    <li>Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ</li>
                    <li>Ø¢ÛŒÙ†Ø¯Ù‡ ØªÙ‡Ø¯ÛŒØ¯Ø§Øª Ø³Ø§ÛŒØ¨Ø±ÛŒ</li>
                    <li>Ø§Ù…Ù†ÛŒØª Ø§ÛŒÙ†ØªØ±Ù†Øª Ø§Ø´ÛŒØ§</li>
                    <li>Ù…Ø­Ø§ÙØ¸Øª Ø§Ø² Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§</li>
                </ul>
                <p>Ø§ÛŒÙ† Ù‡Ù…Ø§ÛŒØ´ Ø¨Ø±Ø§ÛŒ Ù…Ø¯ÛŒØ±Ø§Ù† ITØŒ Ú©Ø§Ø±Ø´Ù†Ø§Ø³Ø§Ù† Ø§Ù…Ù†ÛŒØª Ùˆ Ø¹Ù„Ø§Ù‚Ù…Ù†Ø¯Ø§Ù† Ø¨Ù‡ Ø­ÙˆØ²Ù‡ Ø§Ù…Ù†ÛŒØª Ø³Ø§ÛŒØ¨Ø±ÛŒ Ø·Ø±Ø§Ø­ÛŒ Ø´Ø¯Ù‡ Ø§Ø³Øª.</p>
            `,
            contactInfo: {
                address: 'ØªØ§Ù„Ø§Ø± Ø§Ù…ÛŒØ±Ú©Ø¨ÛŒØ±ØŒ Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ ØµÙ†Ø¹ØªÛŒ Ø§Ù…ÛŒØ±Ú©Ø¨ÛŒØ±ØŒ Ø®ÛŒØ§Ø¨Ø§Ù† Ø­Ø§ÙØ¸ØŒ ØªÙ‡Ø±Ø§Ù†',
                phone: 'Û°Û²Û±-Û·Û·Û·Û·Û·Û·Û·Û·',
                email: 'security@example.com'
            }
        },
        '3': {
            id: '3',
            title: 'Ù‡Ù…Ø§ÛŒØ´ Ø¹Ù„ÙˆÙ… Ø¯Ø§Ø¯Ù‡ Ùˆ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ†',
            date: 'Ûµ Ø¯ÛŒ Û±Û´Û°Û³',
            time: 'Û¹:Û°Û° Ø§Ù„ÛŒ Û±Û¸:Û°Û°',
            location: 'Ù…Ø±Ú©Ø² Ù‡Ù…Ø§ÛŒØ´â€ŒÙ‡Ø§ÛŒ Ø±Ø§Ø²ÛŒ',
            capacity: 'Û±ÛµÛ° Ù†ÙØ±',
            remainingCapacity: 'Û±Û°Û³ Ù†ÙØ±',
            registrationDeadline: 'Û± Ø¯ÛŒ Û±Û´Û°Û³',
            type: 'Ù¾Ú˜ÙˆÙ‡Ø´ÛŒ',
            typeColor: 'green',
            image: 'https://placehold.co/1200x400/10b981/FFFFFF/png?text=Data+Science+Conference',
            description: `
                <p>Ù‡Ù…Ø§ÛŒØ´ ØªØ®ØµØµÛŒ Ø¯Ø± Ø²Ù…ÛŒÙ†Ù‡ Ø¹Ù„ÙˆÙ… Ø¯Ø§Ø¯Ù‡ Ùˆ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ† Ø¨Ø§ Ø³Ø®Ù†Ø±Ø§Ù†Ø§Ù† Ø¨Ø±Ø¬Ø³ØªÙ‡ Ø¯Ø§Ø®Ù„ÛŒ Ùˆ Ø¨ÛŒÙ†â€ŒØ§Ù„Ù…Ù„Ù„ÛŒ.</p>
                <p>Ù…Ø­ÙˆØ±Ù‡Ø§ÛŒ Ø§ØµÙ„ÛŒ Ù‡Ù…Ø§ÛŒØ´:</p>
                <ul>
                    <li>ØªØ­Ù„ÛŒÙ„ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø¨Ø²Ø±Ú¯</li>
                    <li>ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ† Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ</li>
                    <li>Ø¯Ø§Ø¯Ù‡â€ŒÚ©Ø§ÙˆÛŒ</li>
                    <li>Ù‡ÙˆØ´ ØªØ¬Ø§Ø±ÛŒ</li>
                    <li>Ø¹Ù„ÙˆÙ… Ø¯Ø§Ø¯Ù‡ Ø¯Ø± ØµÙ†Ø§ÛŒØ¹ Ù…Ø®ØªÙ„Ù</li>
                </ul>
                <p>Ø§ÛŒÙ† Ù‡Ù…Ø§ÛŒØ´ ÙØ±ØµØªÛŒ Ø¨Ø±Ø§ÛŒ Ø¢Ø´Ù†Ø§ÛŒÛŒ Ø¨Ø§ Ø¢Ø®Ø±ÛŒÙ† Ù¾ÛŒØ´Ø±ÙØªâ€ŒÙ‡Ø§ÛŒ Ø­ÙˆØ²Ù‡ Ø¹Ù„ÙˆÙ… Ø¯Ø§Ø¯Ù‡ Ùˆ Ø´Ø¨Ú©Ù‡â€ŒØ³Ø§Ø²ÛŒ Ø¨Ø§ Ù…ØªØ®ØµØµØ§Ù† Ø§ÛŒÙ† Ø­ÙˆØ²Ù‡ ÙØ±Ø§Ù‡Ù… Ù…ÛŒâ€ŒÚ©Ù†Ø¯.</p>
            `,
            contactInfo: {
                address: 'Ù…Ø±Ú©Ø² Ù‡Ù…Ø§ÛŒØ´â€ŒÙ‡Ø§ÛŒ Ø±Ø§Ø²ÛŒØŒ Ø®ÛŒØ§Ø¨Ø§Ù† ÙˆÙ„ÛŒØ¹ØµØ±ØŒ ØªÙ‡Ø±Ø§Ù†',
                phone: 'Û°Û²Û±-Û¶Û¶Û¶Û¶Û¶Û¶Û¶Û¶',
                email: 'datascience@example.com'
            }
        },
        '4': {
            id: '4',
            title: 'Ù‡Ù…Ø§ÛŒØ´ ØªÙˆØ³Ø¹Ù‡ ÙˆØ¨ Ù…Ø¯Ø±Ù†',
            date: 'Û±Ûµ Ø¨Ù‡Ù…Ù† Û±Û´Û°Û³',
            time: 'Û±Û°:Û°Û° Ø§Ù„ÛŒ Û±Û·:Û°Û°',
            location: 'Ø¯Ø§Ù†Ø´Ú©Ø¯Ù‡ ÙÙ†ÛŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒ',
            capacity: 'Û¶Û° Ù†ÙØ±',
            remainingCapacity: 'Û´Û± Ù†ÙØ±',
            registrationDeadline: 'Û±Û° Ø¨Ù‡Ù…Ù† Û±Û´Û°Û³',
            type: 'Ú©Ø§Ø±Ú¯Ø§Ù‡ÛŒ',
            typeColor: 'purple',
            image: 'https://placehold.co/1200x400/8b5cf6/FFFFFF/png?text=Web+Development',
            description: `
                <p>Ú©Ø§Ø±Ú¯Ø§Ù‡â€ŒÙ‡Ø§ÛŒ Ø¹Ù…Ù„ÛŒ ØªÙˆØ³Ø¹Ù‡ ÙˆØ¨ Ù…Ø¯Ø±Ù† Ø¨Ø§ ÙØ±ÛŒÙ…â€ŒÙˆØ±Ú©â€ŒÙ‡Ø§ÛŒ Ø¬Ø¯ÛŒØ¯ Ø¨Ù‡ Ù‡Ù…Ø±Ø§Ù‡ Ø§Ø±Ø§Ø¦Ù‡ Ú¯ÙˆØ§Ù‡ÛŒ Ù…Ø¹ØªØ¨Ø±.</p>
                <p>Ù…Ø­ÙˆØ±Ù‡Ø§ÛŒ Ø§ØµÙ„ÛŒ Ù‡Ù…Ø§ÛŒØ´:</p>
                <ul>
                    <li>ÙØ±ÛŒÙ…â€ŒÙˆØ±Ú©â€ŒÙ‡Ø§ÛŒ Ø¬Ø§ÙˆØ§Ø§Ø³Ú©Ø±ÛŒÙ¾Øª</li>
                    <li>Ø¨Ø§Ú©â€ŒØ§Ù†Ø¯ Ù…Ø¯Ø±Ù†</li>
                    <li>Ù…Ø¹Ù…Ø§Ø±ÛŒ Ù…ÛŒÚ©Ø±ÙˆØ³Ø±ÙˆÛŒØ³</li>
                    <li>ÙØ±Ø§Ù†Øªâ€ŒØ§Ù†Ø¯ Ø³Ø±ÛŒØ¹ Ùˆ Ø¨Ù‡ÛŒÙ†Ù‡</li>
                    <li>Ø§Ù…Ù†ÛŒØª Ø¯Ø± ÙˆØ¨</li>
                </ul>
                <p>Ø§ÛŒÙ† Ú©Ø§Ø±Ú¯Ø§Ù‡â€ŒÙ‡Ø§ Ø¨Ù‡ ØµÙˆØ±Øª Ø¹Ù…Ù„ÛŒ Ùˆ Ø¨Ø§ ØªÙ…Ø±ÛŒÙ†â€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¨Ø±Ú¯Ø²Ø§Ø± Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ùˆ Ø¨Ø±Ø§ÛŒ ØªÙˆØ³Ø¹Ù‡â€ŒØ¯Ù‡Ù†Ø¯Ú¯Ø§Ù† ÙˆØ¨ Ù…Ù†Ø§Ø³Ø¨ Ù‡Ø³ØªÙ†Ø¯.</p>
            `,
            contactInfo: {
                address: 'Ø¯Ø§Ù†Ø´Ú©Ø¯Ù‡ ÙÙ†ÛŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒØŒ Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ Ø¹Ù„Ù… Ùˆ ØµÙ†Ø¹ØªØŒ Ù†Ø§Ø±Ù…Ú©ØŒ ØªÙ‡Ø±Ø§Ù†',
                phone: 'Û°Û²Û±-ÛµÛµÛµÛµÛµÛµÛµÛµ',
                email: 'webdev@example.com'
            }
        }
    };
    
    return conferences[id] || conferences['1']; 


func
    document.title = `${conferenceData.title} - Ø³Ø§Ù…Ø§Ù†Ù‡ Ù…Ø¯ÛŒØ±ÛŒØª Ù‡Ù…Ø§ÛŒØ´â€ŒÙ‡Ø§`;
    
    // Update header information
    const titleElement = document.getElementById('conferenceTitle');
    const dateElement = document.getElementById('conferenceDate');
    const timeElement = document.getElementById('conferenceTime');
    const locationElement = document.getElementById('conferenceLocation');
    const capacityElement = document.getElementById('conferenceCapacity');
    const typeElement = document.getElementById('conferenceType');
    
    if (titleElement) titleElement.textContent = conferenceData.title;
    if (dateElement) dateElement.textContent = conferenceData.date;
    if (timeElement) timeElement.textContent = conferenceData.time;
    if (locationElement) locationElement.textContent = conferenceData.location;
    if (capacityElement) capacityElement.textContent = `Ø¸Ø±ÙÛŒØª: ${conferenceData.capacity}`;
    
  
    if (typeElement) {
        typeElement.textContent = conferenceData.type;
        typeElement.className = `px-3 py-1 bg-${conferenceData.typeColor}-600 text-white text-sm font-medium rounded-full`;
    }
    
    const imageElement = document.getElementById('conferenceImage');
    if (imageElement) {
        imageElement.src = conferenceData.image;
        imageElement.alt = conferenceData.title;
    }
    
    const descriptionElement = document.getElementById('conferenceDescription');
    if (descriptionElement) {
        descriptionElement.innerHTML = conferenceData.description;
    }
    
   
    const remainingCapacityElement = document.querySelector('.text-blue-600.dark\\:text-blue-400.font-medium');
    const registrationDeadlineElement = document.querySelector('.text-gray-700.dark\\:text-gray-300.font-medium');
    
    if (remainingCapacityElement) remainingCapacityElement.textContent = conferenceData.remainingCapacity;
    if (registrationDeadlineElement) registrationDeadlineElement.textContent = conferenceData.registrationDeadline;
    
    
    const addressElement = document.querySelector('.fa-map-marker-alt').nextElementSibling.querySelector('p');
    const phoneElement = document.querySelector('.fa-phone').nextElementSibling.querySelector('p');
    const emailElement = document.querySelector('.fa-envelope').nextElementSibling.querySelector('p');
    
    if (addressElement) addressElement.textContent = conferenceData.contactInfo.address;
    if (phoneElement) phoneElement.textContent = conferenceData.contactInfo.phone;
    if (emailElement) emailElement.textContent = conferenceData.contactInfo.email;
} 
