import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import LogoutButton from '../atoms/LogoutButton';
import '../styles/settings.css';

interface SettingsDetails {
    title: string;
    description: string;
    icon?: string;
}

const SettingsItemPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [lightMode, setLightMode] = useState<boolean>(() => JSON.parse(localStorage.getItem('dark') || 'false'));
    document.body.style.backgroundColor = lightMode ? "#131619" : "#e3eed4";

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(lightMode));
    }, [lightMode]);

    const settingsDetails: { [key: string]: SettingsDetails } = {
        "1": {
            title: "Luminosity",
            description: "Set the application's mode",
        },
        "2": {
            title: "Logout",
            description: "Logout from the application",
        },
        "3": {
            title: "Security",
            description: "Security and privacy",
        },
        "4": {
            title: "About",
            description: "Electronic Record System",
        }
    };

    const getBack = () => {
        navigate(`/settings`);
    }

    const item = settingsDetails[id];

    if (!item) {
        return <p>Document not found</p>;
    }

    return (
        <div className="settings-item-container" style={{ backgroundColor : lightMode ? 'black' : 'white' }}>
            <button id='get-back' onClick={getBack}>
                Back
            </button>
            <h1 style={{ color : lightMode ? 'white' : 'black' }}>{item.title}</h1>
            <div className="section-items-settings">
                <p>{item.description}</p>
                {id === "1" && (
                    <div className="option-item">
                        <h3 className="min-value">Your luminosity is : {lightMode ? 'dark' : 'light'}</h3>
                        <button id="luminosity-btn" onClick={() => setLightMode(!lightMode)}>
                            Change Luminosity
                        </button>
                    </div>
                )}
                {id === "2" && (
                    <div className="option-item">
                        <LogoutButton />
                    </div>
                )}
                {id === "3" && (
                    <div className="option-item">
                        <div className="settings-items">
                            <ol>
                                <li>
                                    <strong>Authentication and Authorization</strong>: Our application uses JSON Web
                                    Tokens
                                    (JWT) for secure user authentication. Each user is assigned a unique token upon
                                    login,
                                    which is then used to authorize subsequent requests.
                                </li>
                                <li>
                                    <strong>Data Encryption</strong>: All sensitive data is encrypted both at rest and
                                    in
                                    transit. We use HTTPS for secure data transmission and bcrypt for data storage
                                    encryption.
                                </li>
                                <li>
                                    <strong>Error Handling</strong>: Our error messages are designed to be user-friendly
                                    without revealing any sensitive information or system details.
                                </li>
                                <li>
                                    <strong>Secure Cookies</strong>: Our application uses secure, HTTP-only cookies to
                                    store session tokens.
                                </li>
                            </ol>
                        </div>
                    </div>
                )}
                {id === "4" && (
                    <p>
                        This is a professional EHR system. Designed and developed by muzillweb agency, a web development agency specialising in building custom based software solutions.
                        For any enquiries feel free to reach out from our website at <a target="_blank" href="https://abas.org.za/">www.abas.org.za</a>
                        <br />
                        Thank you for using our application.
                    </p>
                    

                )}
            </div>
        </div>
    );
}

export default SettingsItemPage;
