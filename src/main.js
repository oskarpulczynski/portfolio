import starIcon from './images/star-icon.svg'
import frame from './images/frame.svg'
import githubIcon from './images/github.svg'

const projectsContainer = document.querySelector(".projects--js");


const username = "oskarpulczynski";
const direction = 'desc'

fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
	.then(response => response.json())
	.then(response => {
		for (let repository of response) {
			const { homepage,topics,stargazers_count,name, html_url, description } = repository;

let tags = '';

for (let tag of topics) {
  tags += `
  <li class="px-2 py-1 text-sm leading-[1.125rem] bg-gray-400/10 rounded font-bold ">${tag}</li>
  `
}

			const element = `<article class="bg-gradient-to-br from-white/10 to-white/5 rounded-[20px]">
          <div
            class="h-11 p-4 bg-gradient-to-br from-white/10 to-white/5 flex gap-1.5 shadow-innerlight rounded-t-[20px] border-b border-bg">
            <span class=" bg-bg w-3 h-3 block rounded-full opacity-50"> </span>
            <span class=" bg-bg w-3 h-3 block rounded-full opacity-50"></span>
            <span class=" bg-bg w-3 h-3 block rounded-full opacity-50"></span>
          </div>
          <div class="p-5 md:p-10">
            <header class="flex gap-4 items-center mb-4">
              <h3 class="text-2xl leading-none font-bold">${name}</h3>
              <div class="flex gap-0.5 items-center px-2 py-1 bg-gray-400/10 rounded">
                <img src="${starIcon}" alt="" class="w-4 h-4">
                <p class="text-base leading-none font-medium text-gray-400">${stargazers_count}</p>
              </div>
            </header>
            <p class="text-xl text-gray-400 mb-4">
             ${description}
            </p>
            <ul class="flex gap-2 items-center mb-10 flex-wrap">
           ${tags}
            </ul>
            <div class="flex flex-col items-start gap-4 lg:flex-row">
              <a class="inline-flex py-4 px-5 text-base lg:text-xl leading-6 gap-2 text-purple-500 bg-bg font-bold border-[1px] rounded-xl border-gray-800 items-center"
                href="${homepage}" target="_blank" rel="noreferrer nofollow"><img class="h-6 w-6" src="${frame}" alt="">View demo</a>
              <a class="inline-flex py-4 px-5 text-base lg:text-xl leading-6 gap-2 text-purple-500 bg-bg font-bold border-[1px] rounded-xl border-gray-800 items-center"
                href="${html_url}" target="_blank" rel="noreferrer nofollow"><img src="${githubIcon}" alt="">Source code</a>
            </div>
          </div>
        </article>`;
        
        if (homepage)projectsContainer.insertAdjacentHTML("beforeend", element);
		}
	})
	.catch(e => console.log(e));