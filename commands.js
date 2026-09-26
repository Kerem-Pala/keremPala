export const bootLogs = [
    "[  0.000000] Booting KeremOS_kernel (Rust/x86_64) - Initializing core architecture...",
    "[  0.081234] [ OK ] Memory structures and virtual file systems verified.",
    "[  0.123045] [ INFO ] Secure uplink established to Node::Ibaraki_Osaka...",
    "[  0.201456] [ OK ] System initialization complete. Handing over control."
];

export const asciiBanner = String.raw`
 ██╗  ██╗███████╗██████╗ ███████╗███╗   ███╗
 ██║ ██╔╝██╔════╝██╔══██╗██╔════╝████╗ ████║
 █████╔╝ █████╗  ██████╔╝█████╗  ██╔████╔██║
 ██╔═██╗ ██╔══╝  ██╔══██╗██╔══╝  ██║╚██╔╝██║
 ██║  ██╗███████╗██║  ██║███████╗██║ ╚═╝ ██║
 ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝
      ██████╗  █████╗ ██╗      █████╗       
      ██╔══██╗██╔══██╗██║     ██╔══██╗      
      ██████╔╝███████║██║     ███████║      
      ██╔═══╝ ██╔══██║██║     ██╔══██║      
      ██║     ██║  ██║███████╗██║  ██║      
      ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝      
         [ SYSTEM v1.0.0 - RUST / x86_64 ]
         [Type help to show available commands]
`;
const commandList = ["help", "links", "clear", "whoami","projects","skills, experience"];
export const commands = {
    help:(args) => {
        if(args.length >= 1){
            return `Error the command help gets no arguments`;
        }
        return `<p>Available commands: ${commandList.join('    ')}</p>`;
    },
    whoami: (args) => {
        if(args.length >= 1){
            return `Error the command help gets no arguments`;
        }
        return `<div style="margin-bottom: 15px;">Hello! My name is Kerem Pala. I am a first year ISSE(Information System Science and Engineering) Student at Ritsumeikan University. I have been studying computers since I was a little kid. Right now my interests are low-level systems, game development and web development."</div>`;
    },
    links : (args) => {
        if(args.length >= 1){
            return `Error the command help gets no arguments`;
        }
        return `<a href='https://github.com/Kerem-Pala' target='_blank'>GitHub</a>
                <a href='https://www.linkedin.com/in/kerem-pala-829981327/' target='_blank'>LinkedIn</a>
                <a href='' target='_blank'></a>
                <a href='' target='_blank'></a>
                <a href='' target='_blank'></a>
        `;
    },
    clear : (args) => {
        if(args.length >= 1){
            return `Error the command help gets no arguments`;
        }
        const elements = document.querySelectorAll('.line');
        elements.forEach(element => {
            element.remove();
        });
        return "";
    },
    projects : (args) => {
        if(args.length >= 1){
            return `Error the command help gets no arguments`;
        }
        return `<div style="margin: 15px;">Even though many projects are made for fun 
            and learning only project that I consider worth sharing is this website itself.,<br>
             soon to get updated...</div>`;
    },
    sudo : (args) => {
        return "nice try"; 
    },
    skills: (args) => {
        return `
        <div style="line-height: 1.6; margin-top: 10px;">
            <div style="color: #051105; background-color: #2aff43; display: inline-block; padding: 0 5px; margin-bottom: 10px;">[ TECHNICAL SKILLS ]</div>
            
            <div style="margin-bottom: 15px;">
                <div style="color: #2aff43; font-weight: bold;">> Languages & Frameworks</div>
                <div>- Rust, C#, Python, JavaScript, Node.js, Express.js RESTful API, GDScript, C++</div>
            </div>

            <div style="margin-bottom: 15px;">
                <div style="color: #2aff43; font-weight: bold;">> Systems & Infrastructure</div>
                <div>- Linux Architecture (Arch, EndeavourOS, Fedora), Low-Level Systems Programming</div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="color: #2aff43; font-weight: bold;">> Tools & Game Development</div>
                <div>- Godot Engine, Unity Engine, Git, Procedural Generation, Advanced Notion Workspaces, Adobe Photoshop, MS Office 365</div>
            </div>

            <div style="color: #051105; background-color: #2aff43; display: inline-block; padding: 0 5px; margin-bottom: 10px;">[ SOCIAL & COGNITIVE SKILLS ]</div>

            <div style="margin-bottom: 15px;">
                <div style="color: #2aff43; font-weight: bold;">> Analytical & Systemic Thinking</div>
                <div>- Ability to break down complex logic problems and optimize algorithms, honed through data evaluation.</div>
            </div>

            <div style="margin-bottom: 15px;">
                <div style="color: #2aff43; font-weight: bold;">> Instruction & Mentorship</div>
                <div>- Capable of explaining abstract, technical concepts clearly and leading project-based learning.</div>
            </div>

            <div style="margin-bottom: 10px;">
                <div style="color: #2aff43; font-weight: bold;">> Extreme Autonomy & Discipline</div>
                <div>- Goal-oriented execution, cross-cultural adaptability, and strict self-management in both professional and personal endeavors.</div>
            </div>
        </div>
        `;
    },
    experience: (args) => {
        return `
        <div style="line-height: 1.6; margin-top: 10px;">
            <div style="color: #051105; background-color: #2aff43; display: inline-block; padding: 0 5px; margin-bottom: 10px;">[ PROFESSIONAL EXPERIENCE ]</div>

            <div style="margin-bottom: 15px;">
                <div style="color: #2aff43; font-weight: bold;">> Kodland</div>
                <div><em>[ Programming Instructor / Mentor ]</em></div>
                <div>- Taught algorithm fundamentals and core programming logic. Managed project-based learning processes and provided direct technical mentorship.</div>
            </div>

            <div style="margin-bottom: 15px;">
                <div style="color: #2aff43; font-weight: bold;">> Yandex</div>
                <div><em>[ Data Evaluator / Analyst ]</em></div>
                <div>- Processed, analyzed, and evaluated data sets to optimize search engine algorithms and AI models. Conducted rigorous data quality control.</div>
            </div>

            <div style="margin-bottom: 10px;">
                <div style="color: #2aff43; font-weight: bold;">> English Language Instructor</div>
                <div><em>[ Foreign Language Educator ]</em></div>
                <div>- Designed goal-oriented lesson plans. Developed and implemented structured educational materials focusing on syntax and practical speaking skills.</div>
            </div>
            
            <br>
            <div style="opacity: 0.7;"><em>Note: For detailed timelines and further information, execute the 'links' command to access my LinkedIn profile.</em></div>
        </div>
        
        `;
    },

    lol : (args) => {
        return 'lol';
    },
    jinju: (args) => {
        
        const duration = 5000; 
        const end = Date.now() + duration;

        
        const rain = setInterval(() => {
            if (Date.now() > end) {
                clearInterval(rain);
                return;
            }

            const heart = document.createElement('div');
            heart.classList.add('matrix-heart');
            
           
            heart.style.left = Math.random() * 100 + 'vw';
            
           
            const size = Math.random() * 15 + 10;
            heart.style.fontSize = size + 'px';
            
            
            const fallDuration = Math.random() * 3 + 2;
            heart.style.animation = `matrixHeartFall ${fallDuration}s linear forwards`;
            
            heart.textContent = '<3';
            
            document.body.appendChild(heart);

        
           
            setTimeout(() => { 
                heart.remove(); 
            }, fallDuration * 1000);

        }, 50);
        return `Error much love overide...
         love u so much babe`
        
    },



}

