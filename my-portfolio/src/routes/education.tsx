import UOTextBox from "~/components/UOTextBox/UOTextBox";
import "./education.css";

export default function Education() {
    return (
        <main class="text-center mx-auto">
            <div class="mx-auto flex flex-col items-center text-center education-main">
                <p class="university-text" style={"margin-bottom: 10vh;"} data-text="University of Oregon">University of Oregon</p>
                <UOTextBox>
                    <div class="image-uo"></div>
                </UOTextBox>

                <div style={"height: 4rem"}/>
                
                <UOTextBox>
                    <h1 style={"padding: 10px; color: white;"}>
                        Talk about passion for school and why I chose here as 
                        well as explain what I study and why.
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