import { useState } from 'react';
import { ItemNav } from "../utils/utils.ts";
import Sidebar from "../organisms/SideBar.tsx";

import CreateMedicalRecord from "../organisms/CreateMedicalRecord.tsx";

function CreatePage() {
    const [activeTab] = useState<string | null>('create-medical-record'); // Default tab
    const dark: boolean = JSON.parse(localStorage.getItem('dark') || 'false');
    document.body.style.backgroundColor = dark ? "#131619" : "#e3eed4";

    // Function to handle tab selection
   

    return (
        <div style={{ backgroundColor : dark ? 'black' : 'white' }}>
            <Sidebar items={ItemNav.Create} />
            {/*<NavCreate onSelect={handleSelect} />*/}
            <div className="content-container">
                { /*{activeTab === 'create-appointment' && <CreateAppointment />} */}
                {activeTab === 'create-medical-record' && <CreateMedicalRecord />}
            </div>
        </div>
    );
}

export default CreatePage;
