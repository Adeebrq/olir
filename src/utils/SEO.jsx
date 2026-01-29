import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                {/* meta for instagram */}
                {/* <meta property="og:title" content={description} />
                <meta
                    property="og:description"
                    content={description}
                /> */}
                {/* meta for X */}
                {/* <meta name="twitter:title" content={description} />
                <meta
                    name="twitter:description"
                    content={description}
                /> */}
            </Helmet>
        </>
    );
};

export default SEO;
