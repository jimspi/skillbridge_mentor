window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('reveal');
    }
  });
});

function showStep(step) {
  const steps = document.querySelectorAll('.how-step');
  steps.forEach(s => s.classList.remove('show'));
  document.getElementById(step).classList.add('show');

  if (step === 'step2') {
    const currentRole = document.getElementById('currentRole').value;
    const dreamCareer = document.getElementById('dreamCareer').value;
    const skillsInput = document.getElementById('skills').value;
    const currentSkills = skillsInput.split(',').map(skill => skill.trim().toLowerCase());

    const suggestedSkills = {
      'software engineer': ['data structures', 'algorithms', 'system design', 'cloud computing'],
      'product manager': ['roadmapping', 'user research', 'analytics', 'stakeholder management'],
      'data scientist': ['python', 'machine learning', 'statistics', 'data visualization'],
      'marketing manager': ['seo', 'content strategy', 'branding', 'campaign management']
    };

    const careerKey = dreamCareer.toLowerCase();
    let missingSkills = [];

    if (suggestedSkills[careerKey]) {
      missingSkills = suggestedSkills[careerKey].filter(skill => !currentSkills.includes(skill));
    }

    const analysisContainer = document.getElementById('step2');
    analysisContainer.innerHTML = `
      <h3>Step 2: Skill Gap Analysis</h3>
      <p>Dream Career: <strong>${dreamCareer}</strong></p>
      <p>Current Skills: <strong>${currentSkills.join(', ')}</strong></p>
      <h4>Suggested Skills to Learn:</h4>
      <ul>
        ${missingSkills.length ? missingSkills.map(skill => `<li>${skill}</li>`).join('') : '<li>No major gaps detected. Keep sharpening your skills!</li>'}
      </ul>
      <div style="margin-top:2rem;padding:1.5rem;background:linear-gradient(135deg,#81c784,#4caf50);color:white;border-radius:20px;text-align:center;font-size:1.3rem;animation: popFade 1s ease forwards;">
        🎯 A Custom Career Path Has Been Built For You!
      </div>
    `;
  }
}

      </ul>
    `;
  }
}
