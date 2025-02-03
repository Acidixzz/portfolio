import CompanyListing from "~/components/CompanyListing/CompanyListing"
import TextBox from "~/components/TextBox/TextBox"

export default function Experience() {
    return (
        <div class="mx-auto flex flex-col items-center justify-center text-center main-view" style={"height: 60vh"}>
            <TextBox>
                <h1 class="uppercase header-text" style={"padding-bottom: 0;"}>
                    Experience
                </h1>

                <div style={"border-width: 0.5px; margin-top: 30px; border-color: var(--skyblue); margin-left:20px; margin-right: 20px; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
                <CompanyListing
                    company="Edupoint"
                    jobTitle="Mobile Software Engineer Intern"
                    year="2024 - Now"
                    img="/company-logos/Synergy.jpg"
                />
                <div style={"border-width: 0.5px; border-color: var(--skyblue); margin-left: 20px; margin-right: 20px; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
                <CompanyListing
                    company="Edupoint"
                    jobTitle="Software Engineer Intern"
                    year="2023 - 2024"
                    img="/company-logos/Synergy.jpg"
                />
            </TextBox>
        </div>
    )
}