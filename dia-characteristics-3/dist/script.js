document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register');
    const signInForm = document.getElementById('signIn');
    const regCompany = document.getElementById('regCompany');
    const regDepartment = document.getElementById('regDepartment');
    const dominantDrivesContainer = document.getElementById('dominantDrives');
    const drainerDrivesContainer = document.getElementById('drainerDrives');
    const dominantCountElement = document.getElementById('dominantCount');
    const drainerCountElement = document.getElementById('drainerCount');
    const editDominantDrivesContainer = document.getElementById('editDominantDrives');
    const editDrainerDrivesContainer = document.getElementById('editDrainerDrives');
    const editDominantCountElement = document.getElementById('editDominantCount');
    const editDrainerCountElement = document.getElementById('editDrainerCount');
    const adminCompanySelect = document.getElementById('adminCompanySelect');
    const adminProfileList = document.getElementById('adminProfileList');
    const characteristicsList = document.getElementById('characteristicsList');
    const nextButton = document.getElementById('nextButton');
    const doneButton = document.getElementById('doneButton');
    const contextSection = document.getElementById('contextSection');
    const teamMemberDropdown = document.getElementById('teamMember');
    const teamMemberDriveDropdown = document.getElementById('teamMemberDrive');

    const companyOptions = [
        'Target', 'ALEC Engineering & Contracting', 'ALEC Building Material', 'ALEC KSA', 'ALEMCO', 
        'LINQ Modular', 'AJI Heavy Equipment', 'FITOUT Dubai', 'FITOUT Saudi', 'Other'
    ];
    const departmentOptions = [
        'Administration', 'BIM', 'Commercial', 'CRM', 'Design', 'Estimations & Proposals', 'Estimating',
        'Facilities', 'Finance', 'Government Relations', 'IDROTEC', 'IT', 'Legal', 'Leisure Marine', 
        'Lifting Plant', 'Management', 'Marketing', 'Marine', 'Maintenance', 'MEP', 'Mobile Plant', 
        'Other/New/Unsure', 'People & Culture', 'Planning', 'Public Relations', 'QA/QC', 'Procurement', 
        'Scaffolding', 'Security', 'Sales', 'Surveying', 'Workshop'
    ];
    const drives = [
        'Articulator', 'Captain', 'Caretaker', 'Competitor', 'Confidant', 'Contemplator', 
        'Coordinator', 'Enthusiast', 'Finisher', 'First Responder', 'Fixer', 'Guardian', 
        'Impact Player', 'Includer', 'Initiator', 'Innovator', 'Integrator', 'Moderator', 
        'Navigator', 'Networker', 'Nurturer', 'Orientator', 'Pioneer', 'Scheduler', 
        'Skeptic', 'Sniper', 'Specialist', 'Supporter', 'Visionary'
    ];

    // Characteristics mapping for each drive
    const driveCharacteristics = {
        'Articulator': ['talkative', 'presenting', 'verbal', 'transparent', 'interactive', 'conversational', 'expressive', 'captivating', 'entertaining'],
        'Captain': ['decisive', 'clarifying', 'driven', 'persuasive', 'challenging', 'leading', 'assertive', 'strong-willed', 'opinionated', 'imposing', 'candid', 'direct', 'honest'],
        'Caretaker': ['listening', 'emotional', 'expressive', 'sensitive', 'aware', 'intuitive', 'confidential', 'helpful', 'instinctive', 'supportive', 'kind'],
        'Competitor': ['scorekeeping', 'comparing', 'winning', 'measuring', 'aspiring', 'driven', 'intense', 'selective'],
        'Confidant': ['friendly', 'private', 'authentic', 'genuine', 'intimate', 'professional', 'truthful', 'revealing'],
        'Contemplator': ['introspective', 'solitary', 'intellectual', 'philosophical', 'in-depth', 'reflective', 'discontent', 'thinking', 'intense', 'musing', 'driven'],
        'Coordinator': ['flexible', 'interactive', 'controlling', 'collaborative', 'multi-tasking', 'configuring', 'resourceful'],
        'Enthusiast': ['fun', 'optimistic', 'hopeful', 'generous', 'giddy', 'happy', 'enthusiastic', 'energetic', 'joyful', 'influential', 'light-hearted', 'dramatic', 'positive-minded'],
        'Finisher': ['driven', 'dedicated', 'self-motivated', 'productive', 'ambitious', 'independent', 'hard working'],
        'First Responder': ['flexible', 'responsive', 'easy-going', 'present', 'in the moment', 'spontaneous', 'reactive'],
        'Fixer': ['problem-oriented', 'driven', 'investigative', 'weakness-oriented', 'responsive', 'unintimidated', 'insightful'],
        'Guardian': ['certain', 'stable', 'unchanging', 'principled', 'passionate', 'committed', 'self-sacrificing'],
        'Impact Player': ['selective', 'strengths-oriented', 'quality-oriented', 'results-oriented', 'strengths-obsessed', 'excellence-aware', 'discriminating', 'choosy', 'judging', 'sorting', 'dissatisfied'],
        'Includer': ['accepting', 'tolerant', 'interactive', 'perceptive', 'others-oriented', 'welcoming', 'sensitive', 'integrating'],
        'Initiator': ['impatient', 'influential', 'action-oriented', 'initiating', 'catalytic', 'propulsive', 'fast', 'dynamic'],
        'Innovator': ['spontaneous', 'creative', 'innovative', 'collaborative', 'artistic', 'insightful', 'resourceful', 'stimulating'],
        'Integrator': ['integrating', 'seeking', 'spiritual', 'comforting', 'perceptive', 'mystical', 'philosophic', 'counselling', 'listening', 'holistic', 'compassionate'],
        'Moderator': ['fair', 'equal', 'leveling', 'compliant', 'predictable', 'consistent', 'just', 'practical', 'efficient', 'harmonious'],
        'Navigator': ['creative', 'clear', 'option-aware', 'intuitive', 'future-oriented', 'anticipating', 'selective', 'thoughtful', 'insightful'],
        'Networker': ['charming', 'interactive', 'socially proactive', 'influential', 'outgoing', 'gregarious', 'engaging', 'initiating', 'winsome', 'socially energetic'],
        'Nurturer': ['patient', 'perceptive', 'effective', 'encouraging', 'investing', 'others-oriented', 'observant', 'growth-oriented', 'helpful', 'self-sacrificing'],
        'Orientator': ['historical', 'orienting', 'perceptive', 'highlighting', 'collecting', 'studious'],
        'Pioneer': ['independent', 'certain', 'confident', 'self-aware', 'self-sufficient', 'instinctive', 'intense', 'controlling', 'stable', 'persistent'],
        'Scheduler': ['predictable', 'detail-oriented', 'organized', 'efficient', 'meticulous', 'structured', 'neat', 'orderly', 'timely', 'rehearsed', 'planned', 'exact'],
        'Skeptic': ['objective', 'risk-averse', 'data-driven', 'dispassionate', 'skeptical', 'questioning', 'scientific', 'careful', 'investigative'],
        'Sniper': ['goal-oriented', 'persevering', 'driven', 'efficient', 'single-minded', 'progress-aware', 'selective', 'distraction-averse', 'focussed'],
        'Specialist': ['resourceful', 'collecting', 'inquisitive', 'utility-aware', 'generous', 'well-read', 'knowledgeable', 'investigative', 'curious', 'interested', 'inquisitive'],
        'Supporter': ['diligent', 'conscientious', 'judgmental', 'loyal', 'driven', 'dutiful', 'dependable', 'serious', 'self-sacrificing', 'committed', 'responsive', 'independent'],
        'Visionary': ['creative', 'inspiring', 'vivid', 'anticipating', 'imaginative', 'expressive', 'communicating', 'perceptive', 'future-oriented']
    };

    // Mapping of DRIVES to their respective Google Drive video links
    const driveVideos = {
        'Articulator': 'https://drive.google.com/file/d/1WyVzFOqwkAWsZL7t9kBPS8xfWdQd3CVt/view?usp=share_link',
        'Captain': 'https://drive.google.com/file/d/1WyVzFOqwkAWsZL7t9kBPS8xfWdQd3CVt/view?usp=share_link',
        'Caretaker': 'https://drive.google.com/file/d/1iR27DWxZS_hmRgfkOfB1rnt61NuxvgWG/view?usp=share_link',
        'Competitor': 'https://drive.google.com/file/d/1pg3Kuibxn5Oew1GFuDp6fZRJNNh_qNMp/view?usp=share_link',
        'Confidant': 'https://drive.google.com/file/d/1fDUdBsoj88kykQvEPBJirQayNQt3XCRj/view?usp=share_link',
        'Contemplator': 'https://drive.google.com/file/d/1dHflAGp3KJ_rfAwszmCQpeSAclygA__F/view?usp=share_link',
        'Coordinator': 'https://drive.google.com/file/d/1YHFcKRSNIrbpN51Zkn-g14Jy5QeCk4n4/view?usp=share_link',
        'Enthusiast': 'https://drive.google.com/file/d/1S9sN3pzOZzAKIQS_HF_rs2dsM0SnAHtd/view?usp=share_link',
        'Finisher': 'https://drive.google.com/file/d/1BAlOrxRFAEktAgRxhS78xALMt3yg1ARb/view?usp=share_link',
        'First Responder': 'https://drive.google.com/file/d/1wCWAMO6iY0DJCmDp-7OXtGRf6Vv2oP1i/view?usp=share_link',
        'Fixer': 'https://drive.google.com/file/d/1aP8KSjksUDTtYpi7cK8kHpgPMSEcQqrI/view?usp=share_link',
        'Guardian': 'https://drive.google.com/file/d/1IYi7GPya9DDg9I2m789LEgj-lYsYSQjZ/view?usp=share_link',
        'Impact Player': 'https://drive.google.com/file/d/1TCwO0792lgKZ7MJ2U8I0HTppgs2_ddSW/view?usp=share_link',
        'Includer': 'https://drive.google.com/file/d/1utUh63ruGfeS6NvjDsHoMwbWfj3miKlR/view?usp=share_link',
        'Initiator': 'https://drive.google.com/file/d/1Syxj3ArSYSmzOsQO6g7q23tVeL9HPuh_/view?usp=share_link',
        'Innovator': 'https://drive.google.com/file/d/1BLCQ1m7-MFCHWbKg3bUluKSHTzQobEmi/view?usp=share_link',
        'Integrator': 'https://drive.google.com/file/d/1OFdzQ8nmNys0HoB3WA7fxcns8auwweB9/view?usp=share_link',
        'Moderator': 'https://drive.google.com/file/d/12zreBEvyE6TztjydKFtjURMmG7XnyHBI/view?usp=share_link',
        'Navigator': 'https://drive.google.com/file/d/1mSOeg_ty3E9Z4PYYC2rICfuIFUxCFLon/view?usp=share_link',
        'Networker': 'https://drive.google.com/file/d/1eTfn7QgulC0-bMdsnJ3ncsmjLJlFSmod/view?usp=share_link',
        'Nurturer': 'https://drive.google.com/file/d/1zVXLYbVPYjJd_0OG5Tf-NJnty_4pchKP/view?usp=share_link',
        'Orientator': 'https://drive.google.com/file/d/1n8uRMn_0BVeRKrvOwPDmR_oYrruQlXW-/view?usp=share_link',
        'Pioneer': 'https://drive.google.com/file/d/1evT7CEUkm4tsd4281HWklyMGONuCQXEG/view?usp=share_link',
        'Scheduler': 'https://drive.google.com/file/d/14KBUHTPfflio4l4l9id6RUFoF-2jSule/view?usp=share_link',
        'Skeptic': 'https://drive.google.com/file/d/1EPsCVFoOPyapur1xJfpkof8h3i7tlTZQ/view?usp=share_link',
        'Sniper': 'https://drive.google.com/file/d/1Vbe7ArMjS4XMmU9TjNPzC-ECeCZvX0w2/view?usp=share_link',
        'Specialist': 'https://drive.google.com/file/d/1ZHrLceLdt93ccaBKnAHRFnNOqJn1avoR/view?usp=share_link',
        'Supporter': 'https://drive.google.com/file/d/1TBpbu5YYwxKwDBPQLM1H_UBsu4ZHam_I/view?usp=share_link',
        'Visionary': 'https://drive.google.com/file/d/11DhD1HakFQc_sz-6F6H80vk_5AEF2yc0/view?usp=share_link'
    };

    // Populate company and department dropdowns
    function populateDropdown(dropdown, options) {
        dropdown.innerHTML = options.map(option => `<option value="${option}">${option}</option>`).join('');
    }

    populateDropdown(regCompany, ['--Select Company--', ...companyOptions]);
    populateDropdown(regDepartment, ['--Select Department--', ...departmentOptions]);
    populateDropdown(adminCompanySelect, ['--Select Company--', ...companyOptions]);

    // Populate drives and drainers checkboxes
    function populateDrives(containerId, countId, maxCount) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        drives.forEach((drive, index) => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${containerId}-${index}`;
            checkbox.value = drive;
            checkbox.addEventListener('change', () => handleDriveSelection(checkbox, countId, maxCount, containerId));
            const label = document.createElement('label');
            label.htmlFor = `${containerId}-${index}`;
            label.innerText = drive;
            label.classList.add('drive-label');
            label.dataset.drive = drive;
            container.appendChild(checkbox);
            container.appendChild(label);
            container.appendChild(document.createElement('br'));
        });
        document.getElementById(countId).innerText = `Selected: 0/${maxCount}`;
    }

    populateDrives('dominantDrives', 'dominantCount', 9);
    populateDrives('drainerDrives', 'drainerCount', 6);

    function handleDriveSelection(checkbox, countId, maxCount, containerId) {
        const countElement = document.getElementById(countId);
        const otherContainerId = containerId === 'dominantDrives' ? 'drainerDrives' : 'dominantDrives';
        const otherContainer = document.getElementById(otherContainerId);
        let count = parseInt(countElement.innerText.split(': ')[1].split('/')[0]);
        if (checkbox.checked) {
            if (count >= maxCount) {
                alert(`You can only select up to ${maxCount} drives.`);
                checkbox.checked = false;
                return;
            }
            // Ensure unique selection across dominant and drainer drives
            const otherCheckbox = otherContainer.querySelector(`input[value="${checkbox.value}"]`);
            if (otherCheckbox && otherCheckbox.checked) {
                alert('This drive is already selected in the other category.');
                checkbox.checked = false;
                return;
            }
            count++;
        } else {
            count--;
        }
        countElement.innerText = `Selected: ${count}/${maxCount}`;
    }

    function playVideo(drive) {
        const videoUrl = driveVideos[drive];
        if (videoUrl) {
            const videoWindow = window.open(videoUrl, '_blank');
            videoWindow.focus();
        }
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('drive-label')) {
            const drive = e.target.dataset.drive;
            playVideo(drive);
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        const name = document.getElementById('regName').value;
        const surname = document.getElementById('regSurname').value;
        const company = regCompany.value;
        const department = regDepartment.value;
        const email = document.getElementById('regEmail').value;
        const profilePic = document.getElementById('regProfilePic').files[0];
        const dominantDrives = Array.from(document.querySelectorAll('#dominantDrives input:checked')).map(checkbox => checkbox.value);
        const drainerDrives = Array.from(document.querySelectorAll('#drainerDrives input:checked')).map(checkbox => checkbox.value);

        if (dominantDrives.length !== 9 || drainerDrives.length !== 6) {
            alert('Please select exactly 9 Dominant Drives and 6 Drainers.');
            return;
        }

        let profilePicData = null;
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = () => {
                profilePicData = reader.result;
                saveUser({ username, password, name, surname, company, department, email, profilePicData, dominantDrives, drainerDrives });
            };
            reader.readAsDataURL(profilePic);
        } else {
            saveUser({ username, password, name, surname, company, department, email, profilePicData, dominantDrives, drainerDrives });
        }
    });

    function saveUser(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now sign in.');
        resetForm();
        showPage('signInForm');
    }

    function clearFields(form) {
        form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="file"]').forEach(input => input.value = '');
        form.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
        form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    }

    function resetForm() {
        clearFields(registerForm);
        populateDrives('dominantDrives', 'dominantCount', 9);
        populateDrives('drainerDrives', 'drainerCount', 6);
    }

    function showPage(pageId) {
        const pages = ['signInForm', 'registerForm', 'profilePage', 'ratingPage', 'superAdminPage', 'adminPage'];
        pages.forEach(page => document.getElementById(page).style.display = 'none');
        document.getElementById(pageId).style.display = 'block';

        // Clear fields when showing sign-in or registration forms
        if (pageId === 'signInForm' || pageId === 'registerForm') {
            clearFields(document.getElementById(pageId));
        }
    }

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            loadProfile(user);
            showPage('profilePage');
        } else {
            alert('Invalid username or password.');
        }
    });

    function loadProfile(user) {
        document.getElementById('profileName').value = user.name;
        document.getElementById('profileSurname').value = user.surname;
        document.getElementById('profileCompany').value = user.company;
        document.getElementById('profileDepartment').value = user.department;
        document.getElementById('profileEmail').value = user.email;

        const profilePic = document.getElementById('profilePic');
        if (user.profilePicData) {
            profilePic.src = user.profilePicData;
            profilePic.style.display = 'block';
        } else {
            profilePic.style.display = 'none';
        }

        document.getElementById('profileDominantDrives').innerHTML = user.dominantDrives.map(drive => `<li class="editable-drive drive-label" data-drive="${drive}">${drive}</li>`).join('');
        document.getElementById('profileDrainerDrives').innerHTML = user.drainerDrives.map(drive => `<li class="editable-drive drive-label" data-drive="${drive}">${drive}</li>`).join('');

        document.getElementById('editProfileButton').addEventListener('click', () => {
            document.getElementById('profileName').disabled = false;
            document.getElementById('profileSurname').disabled = false;
            document.getElementById('profileCompany').disabled = false;
            document.getElementById('profileDepartment').disabled = false;
            document.getElementById('profileEmail').disabled = false;
            document.getElementById('editProfileSection').style.display = 'block';
            document.getElementById('saveProfileButton').style.display = 'block';
            document.getElementById('editProfileButton').style.display = 'none';

            // Add dropdowns for editing drives
            editDominantDrivesContainer.innerHTML = ''; // Clear existing dropdowns
            user.dominantDrives.forEach(drive => {
                const select = document.createElement('select');
                select.className = 'dropdown-drive';
                select.innerHTML = drives.map(d => `<option value="${d}" ${d === drive ? 'selected' : ''}>${d}</option>`).join('');
                select.addEventListener('change', () => handleDriveChange(select, 'dominant', user));
                editDominantDrivesContainer.appendChild(select);
            });

            editDrainerDrivesContainer.innerHTML = ''; // Clear existing dropdowns
            user.drainerDrives.forEach(drive => {
                const select = document.createElement('select');
                select.className = 'dropdown-drive';
                select.innerHTML = drives.map(d => `<option value="${d}" ${d === drive ? 'selected' : ''}>${d}</option>`).join('');
                select.addEventListener('change', () => handleDriveChange(select, 'drainer', user));
                editDrainerDrivesContainer.appendChild(select);
            });
        });
    }

    function handleDriveChange(select, type, user) {
        const newDrive = select.value;
        const isDominant = type === 'dominant';
        const currentDrives = isDominant ? user.dominantDrives : user.drainerDrives;
        const otherDrives = isDominant ? user.drainerDrives : user.dominantDrives;

        if (otherDrives.includes(newDrive)) {
            alert('This drive is already selected in the other category.');
            select.value = currentDrives.find(d => d !== newDrive);
            return;
        }

        const index = currentDrives.indexOf(select.dataset.currentDrive);
        if (index > -1) {
            currentDrives[index] = newDrive;
            select.dataset.currentDrive = newDrive;
        }

        if (isDominant) {
            user.dominantDrives = currentDrives;
        } else {
            user.drainerDrives = currentDrives;
        }

        saveEditedUser(user);
    }

    document.getElementById('saveProfileButton').addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));

        user.name = document.getElementById('profileName').value;
        user.surname = document.getElementById('profileSurname').value;
        user.company = document.getElementById('profileCompany').value;
        user.department = document.getElementById('profileDepartment').value;
        user.email = document.getElementById('profileEmail').value;

        const profilePic = document.getElementById('editProfilePic').files[0];
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = () => {
                user.profilePicData = reader.result;
                saveEditedUser(user);
            };
            reader.readAsDataURL(profilePic);
        } else {
            saveEditedUser(user);
        }
    });

    function saveEditedUser(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const index = users.findIndex(u => u.username === user.username);
        users[index] = user;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        loadProfile(user);
        document.getElementById('editProfileSection').style.display = 'none';
        document.getElementById('saveProfileButton').style.display = 'none';
        document.getElementById('editProfileButton').style.display = 'block';
    }

    document.getElementById('rateSomeoneButton').addEventListener('click', () => {
        populateTeamMembers();
        showPage('ratingPage');
    });

    function populateTeamMembers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        teamMemberDropdown.innerHTML = '<option value="">--Select Team Member--</option>';
        users.filter(user => user.username !== loggedInUser.username).forEach(user => {
            const option = document.createElement('option');
            option.value = user.username;
            option.textContent = `${user.name} ${user.surname}`;
            teamMemberDropdown.appendChild(option);
        });
        teamMemberDropdown.disabled = false;
    }

    teamMemberDropdown.addEventListener('change', function () {
        const selectedUser = this.value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === selectedUser);
        if (user) {
            teamMemberDriveDropdown.innerHTML = user.dominantDrives.map(drive => `<option value="${drive}">${drive}</option>`).join('');
        }
    });

    teamMemberDriveDropdown.addEventListener('change', function () {
        const selectedDrive = this.value;
        const characteristics = driveCharacteristics[selectedDrive] || [];
        characteristicsList.innerHTML = characteristics.map(characteristic => `<li class="characteristic">${characteristic}</li>`).join('');
        bindCharacteristicSelection();
    });

    function bindCharacteristicSelection() {
        const characteristicsItems = document.querySelectorAll('.characteristic');
        let selectedCount = 0;
        characteristicsItems.forEach(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('selected')) {
                    item.classList.remove('selected');
                    selectedCount--;
                } else if (selectedCount < 4) {
                    item.classList.add('selected');
                    selectedCount++;
                } else {
                    alert('You can select up to 4 characteristics.');
                }
            });
        });
    }

    nextButton.addEventListener('click', () => {
        const selectedCharacteristics = Array.from(document.querySelectorAll('.characteristic.selected')).map(item => item.textContent);
        if (selectedCharacteristics.length < 1) {
            alert('Please select at least one characteristic.');
            return;
        }

        contextSection.style.display = 'block';
    });

    doneButton.addEventListener('click', () => {
        alert('Your acknowledgement of your Colleague was submitted. Thank you!');
        showPage('profilePage');
    });

    function logout() {
        localStorage.removeItem('loggedInUser');
        clearFields(signInForm);
        showPage('signInForm');
    }

    // Handle Super Admin Login
    document.getElementById('superAdminButton').addEventListener('click', () => {
        const username = prompt("Enter SUPER ADMIN username:");
        const password = prompt("Enter SUPER ADMIN password:");
        if (username === "DRIVESUPER" && password === "0826527350Dries!") {
            showPage('superAdminPage');
        } else {
            alert("Invalid SUPER ADMIN credentials.");
        }
    });

    // Handle Admin Login
    document.getElementById('adminButton').addEventListener('click', () => {
        const username = prompt("Enter ADMIN username:");
        const code = prompt("Enter ADMIN code:");
        const adminCodes = JSON.parse(localStorage.getItem('adminCodes')) || [];
        const admin = adminCodes.find(admin => admin.adminUsername === username && admin.adminCode === code);
        if (admin) {
            showPage('adminPage');
        } else {
            alert("Invalid ADMIN credentials.");
        }
    });

    // Handle generating admin codes
    document.getElementById('generateAdminCodeForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const adminEmail = document.getElementById('adminEmail').value;
        const adminName = document.getElementById('adminName').value;
        const adminCompany = document.getElementById('adminCompany').value;
        const adminDepartment = document.getElementById('adminDepartment').value;

        // Check if email already exists
        const adminCodes = JSON.parse(localStorage.getItem('adminCodes')) || [];
        if (adminCodes.some(admin => admin.adminUsername === adminEmail)) {
            alert('This email is already registered as an admin.');
            return;
        }

        sendVerificationEmail(adminEmail, adminName, adminCompany, adminDepartment);
    });

    function sendVerificationEmail(adminEmail, adminName, adminCompany, adminDepartment) {
        // This is a placeholder function to simulate sending an email.
        // In a real application, you would integrate an email service here.
        console.log(`Sending verification email to ${adminEmail}`);

        // Simulate email verification after a delay
        setTimeout(() => {
            const verificationLink = `https://example.com/verify?email=${adminEmail}`;
            console.log(`Verification link: ${verificationLink}`);
            verifyEmail(adminEmail, adminName, adminCompany, adminDepartment);
        }, 2000);
    }

    function verifyEmail(adminEmail, adminName, adminCompany, adminDepartment) {
        document.getElementById('emailVerificationStatus').innerText = 'Waiting for email verification';

        // Simulate email verification link click
        setTimeout(() => {
            const isVerified = confirm(`Click OK to verify the email: ${adminEmail}`);
            if (isVerified) {
                const adminCodes = JSON.parse(localStorage.getItem('adminCodes')) || [];
                const adminCode = Math.random().toString(36).substring(2, 8);
                adminCodes.push({ adminUsername: adminEmail, adminCode, adminName, adminCompany, adminDepartment });
                localStorage.setItem('adminCodes', JSON.stringify(adminCodes));
                document.getElementById('emailVerificationStatus').innerText = 'Email Verified, you can proceed';
                displayAdminCodes(adminEmail, adminCode);
            } else {
                document.getElementById('emailVerificationStatus').innerText = 'Email verification failed';
            }
        }, 3000);
    }

    function displayAdminCodes(email, code) {
        const adminCodesList = document.getElementById('adminCodesList');
        adminCodesList.innerHTML = `
            <li>Admin Username: ${email}</li>
            <li>Admin Password: ${code}</li>
            <button id="copyAdminCredentials">Copy Admin Username and Password</button>
        `;
        document.getElementById('copyAdminCredentials').addEventListener('click', () => {
            const credentials = `Admin Username: ${email}\nAdmin Password: ${code}`;
            navigator.clipboard.writeText(credentials).then(() => {
                alert('Username and Password Copied. You can now paste this in an email and send it to the relevant Manager or Supervisor.');
            });
        });
    }

    document.getElementById('adminCompanySelect').addEventListener('change', (e) => {
        const selectedCompany = e.target.value;
        adminProfileList.innerHTML = '';
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const companyUsers = users.filter(user => user.company === selectedCompany).sort((a, b) => a.name.localeCompare(b.name));
        if (companyUsers.length === 0) {
            adminProfileList.innerHTML = '<li>No Users Registered under this Company yet.</li>';
        } else {
            companyUsers.forEach(user => {
                const li = document.createElement('li');
                li.innerText = `${user.name} ${user.surname}`;
                li.addEventListener('click', () => showUserDrives(user));
                adminProfileList.appendChild(li);
            });
        }
    });

    function showUserDrives(user) {
        adminProfileList.innerHTML = `
            <h2>${user.name} ${user.surname}</h2>
            <p><strong>Top 9 Dominant DRIVES:</strong></p>
            <ul>${user.dominantDrives.map(drive => `<li class="drive-label" data-drive="${drive}">${drive}</li>`).join('')}</ul>
            <p><strong>Bottom 6 DRAINERS:</strong></p>
            <ul>${user.drainerDrives.map(drive => `<li class="drive-label" data-drive="${drive}">${drive}</li>`).join('')}</ul>
        `;
    }

    // Event listeners for navigation buttons
    document.getElementById('registerButton').addEventListener('click', () => showPage('registerForm'));
    document.querySelectorAll('.backButton').forEach(button => button.addEventListener('click', () => showPage('signInForm')));
    document.getElementById('signOutButton').addEventListener('click', logout);
});