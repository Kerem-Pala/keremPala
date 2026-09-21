const terminal = document.querySelector(".terminal");
const inputLine = document.querySelector(".input-line");
const terminalInput = document.getElementById("terminalInput");
const terminalText = document.getElementById("terminal-text");
const matchesText = document.querySelector('.matches');


const cmdhistory = [];
const commandList = ["help", "links", "clear", "whoami","projects","skills","sudo"];

const bootLogs = [
    "[  0.000000] Booting KeremOS_kernel (Rust/x86_64) - Initializing core architecture...",
    "[  0.081234] [ OK ] Memory structures and virtual file systems verified.",
    "[  0.123045] [ INFO ] Secure uplink established to Node::Ibaraki_Osaka...",
    "[  0.201456] [ OK ] System initialization complete. Handing over control."
];

const asciiBanner = String.raw`
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
         [Type help to show available commands];
`;

const commands = {
    help:(args) => {
        return `Available commands:${commandList.join(' ')}`;
    },
    whoami: (args) => {
        return "asd";
    },
    links : (args) => {
        return "<a href='https://www.google.com' target='_blank'>google</a>";
    },
    clear : (args) => {
        const elements = document.querySelectorAll('.line');
        elements.forEach(element => {
            element.remove();
        });
        return "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
   // systemBoot();
});


terminalInput.addEventListener('input', (e) => {   
    terminalText.textContent = e.target.value;       
});

function terminalFocus(){
    terminalInput.focus();
}
terminal.addEventListener('click', (e) => {
   // if(isBooting) return;

    if (window.getSelection().toString() === ""){
        terminalFocus();
    }

});

let historyPointer = 0;
let currentInput = "";
terminalInput.addEventListener('keydown', (e) => {
    
   // if(isBooting) return;

    if(e.key === "Enter"){
        const command = terminalInput.value.trim();
        if(command != ''){
            processCommand(command);
        }
        terminalInput.value = '';
        terminalText.textContent = '';
        historyPointer = 0;
        currentInput = "";
        return;

    } 

    
   
    if(e.key === "ArrowUp")
    {
        e.preventDefault();

        if(cmdhistory.length === 0) return;

        if (historyPointer === 0) {
            currentInput = terminalInput.value;
        }

        if(historyPointer < cmdhistory.length){
            historyPointer++;
            const histCmd = cmdhistory.at(-historyPointer);

            terminalInput.value = histCmd;
            terminalText.textContent = histCmd;
        }
    }
    else if(e.key === "ArrowDown"){
        e.preventDefault();
        if(historyPointer > 0){
            historyPointer--;

        if(historyPointer === 0){
            terminalInput.value = currentInput;
            terminalText.textContent = currentInput;
        }else{
           
            const histCmd = cmdhistory.at(-historyPointer);

            terminalInput.value = histCmd;
            terminalText.textContent = histCmd;
        }
        }
        


    }

   if(e.key === "Tab"){
       e.preventDefault();

       const currentCmd = terminalInput.value;
       const matchingCommands = [];

        if(currentCmd === '') return;

        commandList.forEach(cmd => {
            if(cmd.slice(0,currentCmd.length) === currentCmd.toLowerCase()){
                matchingCommands.push(cmd);
            }
            
        });
        
       
        if(matchingCommands.length === 1){
            terminalInput.value = matchingCommands[0];
            terminalText.textContent = matchingCommands[0];
            matchesText.textContent = '';
        }
        else if(matchingCommands.length > 1){
            matchesText.textContent = matchingCommands.join(' ');
        }else{
            return;
        }
       
       }
       
   
    
          
});

function processCommand(cmd){
   
    if(!cmd.trim()) return;

    const [command, ...args] = cmd.trim().toLowerCase().split(' ');

    createLine(`user@web-terminal:~$ ${cmd}`, 'user-cmd');

    if(commands[command]){
        const response = commands[command](args);
        if(response){
            createLine(response, 'response-line');
        }
    }else{
        createLine(`bash: ${command}: command not found`, 'response-line');
    }
    terminal.scrollTop = terminal.scrollHeight;

    cmdhistory.push(cmd);
    
}

function createLine(text, className){
    const newLine = document.createElement('div');
    newLine.classList.add('line', className);
    newLine.innerHTML = text;
    terminal.insertBefore(newLine, inputLine);
    
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function systemBoot(){
    isBooting = true;
    
    inputLine.style.opacity = 0;
    for(let i = 0; i < bootLogs.length; i++){

        await(randomCharDecode(bootLogs[i], 'logs'));

        const randomTime = Math.floor(Math.random() * 100) + 20;
        await sleep(randomTime);
        terminal.scrollTop = terminal.scrollHeight;
    }
    await(showLoadingSpinner(1000));

    const allLogs = document.querySelectorAll('.logs');
    allLogs.forEach(log => log.classList.add('fade-out'));
    
    await(sleep(500));
    allLogs.forEach(log => log.remove());
    

    
    await(sleep(700));
    const bannerElement = document.getElementById('fixed-banner');
    bannerElement.textContent = asciiBanner;
    bannerElement.style.display = 'block'; 
    inputLine.style.opacity = 1;
    isBooting = false; 
    terminalInput.focus();

}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

async function randomCharDecode(text, className){
    const line = document.createElement('div');
    line.classList.add('line', className);
    terminal.insertBefore(line, inputLine);

    let currentText = "";

    for(let i = 0; i < text.length; i++){
        let scrambleFrames = 3;
        for(let j =0; j < scrambleFrames; j++){
            line.textContent = currentText + getRandomChar();
            await(sleep(1));
        }

        currentText += text[i];
        line.textContent = currentText;




    }
    terminal.scrollTop = terminal.scrollHeight;
}

async function showLoadingSpinner(durationMs) {
    const spinnerLine = document.createElement('div');
    spinnerLine.classList.add('line', 'logs'); 
    terminal.insertBefore(spinnerLine, inputLine);

    const frames = ['-', '\\', '|', '/'];
    let i = 0;
    const endTime = Date.now() + durationMs;

    
    while (Date.now() < endTime) {
        spinnerLine.textContent = `[ ${frames[i % frames.length]} ] System verifying integrity...`;
        i++;
        await sleep(100); 
    }
    
    
    spinnerLine.textContent = `[ OK ] System verified. Ready for user space.`;
    await sleep(400); 
}
