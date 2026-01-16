// services/geminiService.ts

// Mock function - simulates AI profile summarization
export const summarizeProfile = async (rawText: string) => {
  console.log("Mock AI summarizing:", rawText);
  
  // Return fake data after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bio: "This is a simulated AI-generated bio. The user appears to be an experienced educator with a passion for student success and curriculum development.",
        skills: ["Classroom Management", "Curriculum Design", "Student Engagement", "Mock Skill 1", "Mock Skill 2"]
      });
    }, 1000);
  });
};

// Mock function - simulates AI job matching
export const matchJobs = async (teacherProfile: any, jobs: any[]) => {
  console.log("Mock AI matching jobs for:", teacherProfile.name);

  // Return fake match scores
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = jobs.map((job) => ({
        jobId: job.id,
        matchScore: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        reasoning: "This is a simulated AI match reasoning. The candidate's skills align well with the job requirements."
      }));
      resolve(results);
    }, 1000);
  });
};