export const aboutTabs = [
  {
    // Education Tab
    title: "Education",
    value: "education",
    content: (
      <div className="text-gray-300 space-y-8">
        {/* Education 1 */}
        <div>
          <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
            🎓 Master of Applied Computing
          </h4>
          <p>University of Windsor, Windsor, ON, Canada</p>
          <p className="text-sm text-[var(--tertiary-color)]">
            January 2025 - April 2026
          </p>
        </div>

        {/* Education 2 */}
        <div>
          <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
            🎓 Bachelor of Computer Engineering
          </h4>
          <p>Gujarat Technological University, Gujarat, India</p>
          <p className="text-sm text-[var(--tertiary-color)]">
            July 2019 - May 2023
          </p>
        </div>
      </div>
    ),
  },
  {
    // Experience Tab
    title: "Experience",
    value: "experience",
    content: (
      <div className="text-gray-300 space-y-6">
        {/* Experience 1 */}
        <div>
          <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
            🎯 Intern - UK Department
          </h4>
          <p>Kanan.co · Internship</p>
          <p className="text-sm text-[var(--tertiary-color)]">
            May 2024 - Oct 2024 · 6 mos · Vadodara, Gujarat, India · On-site
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>
              Assisted the UK department in counseling students, resolving
              queries, and recommending UK universities tailored to their needs.
            </li>
            <li>
              Reviewed and assigned Statements of Purpose (SOPs) to the team
              while providing university interview preparation training.
            </li>
            <li>
              Managed and updated student data using Google Sheets and supported
              students during visa fairs.
            </li>
            <li>
              Engaged with prospective students through outreach and follow-ups
              for visa fairs.
            </li>
            <li>
              Worked with CRM, K-APPLY, COMMUNITY APP, and K-PREP platforms to
              support operations and implementation.
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div>
          <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
            💻 Full Stack Developer
          </h4>
          <p>The One Web Technology · Internship</p>
          <p className="text-sm text-[var(--tertiary-color)]">
            Feb 2023 - May 2023 · 4 mos · Vadodara, Gujarat, India · On-site
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>
              Built advanced e-commerce platforms using React.js, Express.js,
              MongoDB, and various npm libraries.
            </li>
            <li>
              Implemented backend functionalities including user authentication,
              API integration, and database management.
            </li>
            <li>
              Developed responsive UIs using CSS, Bootstrap, and additional
              front-end libraries for seamless UX across devices.
            </li>
          </ul>
        </div>

        {/* Experience 3 */}
        <div>
          <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
            🛠 Intern
          </h4>
          <p>Tntra · Internship</p>
          <p className="text-sm text-[var(--tertiary-color)]">
            Jun 2022 - Jul 2022 · 2 mos · Vadodara, Gujarat, India · On-site
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>
              Designed projects using MVC and MVT architectures, showcasing
              strong development and problem-solving skills.
            </li>
            <li>
              Mastered JavaScript concepts including OOP, functions, classes,
              closures, and form validation.
            </li>
            <li>
              Utilized Git and GitHub for version control and effective team
              collaboration.
            </li>
            <li>
              Worked on backend development using Django to build and integrate
              server-side functionalities.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
