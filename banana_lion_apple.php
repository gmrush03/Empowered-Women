<?php

// 1. Establishing Equality
function empowerWomen($genderIdentity) {
    // All genders are equal
    if ($genderIdentity === 'female' ||
        $genderIdentity === 'male' ||
        $genderIdentity === 'non-binary') {
        return true;
    }
    else {
        return false;
    }
}

// 2. Providing Opportunities 
function careerAdvancement($job) {
    // Open jobs to all genders 
    if ($job === 'engineer' ||
        $job === 'CEO' ||
        $job === 'lawyer') {
        return true;
    }
    else {
        return false;
    }
}

// 3. Respect and Representation
function createSpace($space) {
    // Safe and accepting environment
    if ($space === 'workplace' ||
        $space === 'school' ||
        $space === 'community') {
        return true;
    }
    else {
        return false;
    }
}

// 4. Advocacy and Education
function spreadAwareness($message) {
    // Education and raising awareness
    if ($message === 'equal pay' ||
        $message === 'no gender discrimination' ||
        $message === 'positive female role models') {
        return true;
    }
    else {
        return false;
    }
}

// 5. Empowerment and Support
function offerSupport($help) {
    // Help and resources available
    if ($help === 'mentorship' ||
        $help === 'counseling' ||
        $help === 'financial aid') {
        return true;
    }
    else {
        return false;
    }
}
?>