interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Unique identifier for MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Unique identifier for MinorCredits
}

// Define the sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MajorCredits' };
}

// Define the sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MinorCredits' };
}