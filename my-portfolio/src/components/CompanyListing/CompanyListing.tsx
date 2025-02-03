import "./CompanyListing.css";

interface CompanyListingProps {
    img: string;
    company: string;
    jobTitle: string;
    year: string;
}

export default function CompanyListing(props: CompanyListingProps) {

    const { company, jobTitle, year, img } = props;

    return (
        <div class="company-container flex justify-items-center items-center p-5">
            <div class="square-logo">
                <img src={img} width={100} height={100} />
            </div>
            <div class="company-name-container text-left">
                <p class="company-name">{company}</p>
                <p class="company-job">{jobTitle}</p>
            </div>
            <div class="year-container">
                <p class="company-year">{year}</p>
            </div>
        </div>
    );
}
