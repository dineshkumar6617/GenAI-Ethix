document.getElementById('decisionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const scenario = document.getElementById('scenario').value;
    const priority = document.getElementById('priority').value;
    const resultText = document.getElementById('resultText');
    const resultsSection = document.getElementById('results');

    // Fake AI logic for demo purposes
    let decision = '';

    switch(priority) {
        case 'utilitarianism':
            decision = 'Based on utilitarianism, the AI recommends choosing the option with the greatest overall benefit.';
            break;
        case 'deontology':
            decision = 'According to deontology, the AI suggests following moral rules strictly, regardless of the consequences.';
            break;
        case 'virtue_ethics':
            decision = 'Following virtue ethics, the AI emphasizes the importance of acting in line with moral character.';
            break;
        default:
            decision = 'No valid ethical framework selected.';
    }

    // Fixing the string concatenation issue
    resultText.textContent = `Scenario: "${scenario}"\n\nDecision: ${decision}`;

    resultsSection.classList.remove('hidden');
});
