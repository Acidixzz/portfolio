import UOTextBox from "~/components/UOTextBox/UOTextBox";
import "./education.css";

export default function Education() {
    return (
        <main class="text-center mx-auto">
            <div class="mx-auto flex flex-col items-center text-center education-main">
                <p class="university-text" style={"margin-bottom: 10vh;"} data-text="University of Oregon">University of Oregon</p>
                <UOTextBox>
                    <div style={"padding: 15px; padding-bottom: 0;"}>
                    <div class="image-uo" style={"border-radius: 5px;"}></div>
                    </div>
                    <h1 style={"padding: 30px; color: white;"}>
                        It has always been a dream of mine to pursue an education here at the University of Oregon. 
                        From watching their sports as a kid, to visiting family in Oregon every year, ther has always 
                        been something special about the atmosphere in Oregon that called to me. As I grew older, 
                        this dream never changed and became my reality. Graduating in June 2026, I currently major in 
                        Computer Science, Data Science, and Spatial Data Science and Technologies.  
                    </h1>
                </UOTextBox>
               
                <div style={"height: 4rem"}/>
                
                <UOTextBox>
                    <h1 style={"padding: 10px; color: white;"}>
                        Clubs, Extra Cariculars, and hobbies involving campus (i.e. running)
                    </h1>
                </UOTextBox>
                
                <div style={"height: 4rem"}/>
                
                <UOTextBox>
                    <h1 style={"padding: 10px; color: white;"}>
                        skills, C#, SQL, css, html, React, Solid, TypeScript, C, Python
                    </h1>
                </UOTextBox>
                
                <div style={"height: 4rem"}/>
                
                <UOTextBox>
                    <h1 style={"padding: 10px; color: white;"}>
                        I don't really know what to talk about but I need to write some words down to see 
                        what the component looks like with a paragraph. This should make testing a lot better.
                        I think this looks pretty good. This page shouldn't need too many components. It should just need this box
                        and the rest will be in line styles for the content
                    </h1>
                </UOTextBox>
            </div>
        </main>
    )
}