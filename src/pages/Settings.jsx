// import { useState } from "react";
// import "./Settings.css";

// function Settings() {
//   const [activeSection, setActiveSection] = useState("Basic Info");
//   const [settings, setSettings] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     birthDate: "",
//     gender: "",
//     country: "",
//   });
//   const [saveMessage, setSaveMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSettings((currentSettings) => ({
//       ...currentSettings,
//       [name]: value,
//     }));
//     setSaveMessage("");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSaveMessage("Your changes are saved for this visit.");
//   };

//   return (
//     <div className="settings-page">
//       <main className="account-main">
//         <header className="account-header">
//           <h1>My Account</h1>
//         </header>

//         <div className="account-breadcrumb">
//           <div className="breadcrumb-line">
//             <span aria-hidden="true">⌂</span>
//             <span>/</span>
//             <span>Settings</span>
//           </div>
//           <h2>Settings</h2>
//         </div>

//         <section className="account-content">
//           <nav className="settings-menu" aria-label="Settings sections">
//             {["Basic Info", "Account", "Notifications", "Privacy"].map(
//               (section) => (
//                 <button
//                   className={`settings-menu-item ${
//                     activeSection === section ? "active" : ""
//                   }`}
//                   key={section}
//                   onClick={() => {
//                     setActiveSection(section);
//                     setSaveMessage("");
//                   }}
//                   type="button"
//                 >
//                   <span aria-hidden="true">•</span>
//                   {section}
//                 </button>
//               ),
//             )}
//           </nav>

//           <div className="account-details">
//             <section className="profile-card">
//               <div className="profile-avatar" aria-hidden="true">
//                 JP
//               </div>
//               <div className="profile-text">
//                 <h3>Patient Profile</h3>
//                 <p>Manage your personal information</p>
//               </div>
//             </section>

//             {activeSection === "Basic Info" ? (
//               <form className="basic-info-card" onSubmit={handleSubmit}>
//                 <h3>Basic Information</h3>
//                 <div className="account-form-grid">
//                   <label>
//                     Full name
//                     <input
//                       type="text"
//                       name="fullName"
//                       autoComplete="name"
//                       value={settings.fullName}
//                       onChange={handleChange}
//                     />
//                   </label>
//                   <label>
//                     Email address
//                     <input
//                       type="email"
//                       name="email"
//                       autoComplete="email"
//                       value={settings.email}
//                       onChange={handleChange}
//                     />
//                   </label>
//                   <label>
//                     Phone number
//                     <input
//                       type="tel"
//                       name="phone"
//                       autoComplete="tel"
//                       value={settings.phone}
//                       onChange={handleChange}
//                     />
//                   </label>
//                   <label>
//                     Date of birth
//                     <input
//                       type="date"
//                       name="birthDate"
//                       value={settings.birthDate}
//                       onChange={handleChange}
//                     />
//                   </label>
//                   <label>
//                     Gender
//                     <select
//                       name="gender"
//                       value={settings.gender}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select gender</option>
//                       <option value="female">Female</option>
//                       <option value="male">Male</option>
//                       <option value="other">Other</option>
//                       <option value="prefer-not-to-say">
//                         Prefer not to say
//                       </option>
//                     </select>
//                   </label>
//                   <label>
//                     Country
//                     <input
//                       type="text"
//                       name="country"
//                       autoComplete="country-name"
//                       value={settings.country}
//                       onChange={handleChange}
//                     />
//                   </label>
//                 </div>
//                 <button className="save-account-button" type="submit">
//                   Save changes
//                 </button>
//                 {saveMessage && (
//                   <p className="settings-save-message" role="status">
//                     {saveMessage}
//                   </p>
//                 )}
//               </form>
//             ) : (
//               <section className="basic-info-card other-settings">
//                 <h3>{activeSection}</h3>
//                 <p>Manage your {activeSection.toLowerCase()} preferences here.</p>
//               </section>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Settings;
import { useState } from "react";
import {
  Home, Settings as SettingsIcon,
  Menu, Search, Bell, UserCircle, FileText,
  LockKeyhole, ShieldCheck, Monitor, Smartphone, Trash2, Eye,
  EyeOff, CheckCircle, X, ChevronRight
} from "lucide-react";
import Footer from "../components/Footer";
import "./Settings.css";

const settingItems = [
  { label: "Profile", icon: UserCircle, id: "profile" },
  { label: "Basic Info", icon: FileText, id: "basic-info" },
  { label: "Change Password", icon: LockKeyhole, id: "change-password" },
  { label: "2FA", icon: ShieldCheck, id: "two-factor" },
  { label: "Sessions", icon: Monitor, id: "sessions" },
  { label: "Delete Account", icon: Trash2, id: "delete-account" }
];

function Settings({ sidebarCollapsed, onToggleSidebar }) {
  const [activeSetting, setActiveSetting] = useState("profile");
  const [visible, setVisible] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const [form, setForm] = useState({
    firstName: "Alec",
    lastName: "Thompson",
    gender: "Male",
    month: "February",
    day: "1",
    year: "2021",
    email: "example@email.com",
    bloodGroup: "A+",
    location: "Sydney, Australia",
    phone: "+40 735 631 620",
    height: "",
    weight: ""
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [sessions, setSessions] = useState([
    { id: 1, name: "Current browser session", device: "Desktop computer", location: "Current session", active: true },
    { id: 2, name: "Chrome on macOS", device: "Computer", location: "US", active: false },
    { id: 3, name: "Safari on iPhone", device: "Mobile phone", location: "US", active: false }
  ]);

  const [security, setSecurity] = useState({
    sms: "+3012374423",
    smsEnabled: true,
    authenticator: false,
    securityKey: false
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const notify = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3500);
  };

  const goToSection = (id) => {
    setActiveSetting(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const saveBasicInfo = (e) => {
    e.preventDefault();
    notify("Basic information saved in this page.");
  };

  const updatePassword = (e) => {
    e.preventDefault();

    if (!passwords.current || !passwords.new || !passwords.confirm) {
      notify("Please fill in all password fields.");
      return;
    }

    if (passwords.new.length < 6) {
      notify("Your new password must have at least 6 characters.");
      return;
    }

    if (!/[0-9]/.test(passwords.new) || !/[^A-Za-z0-9]/.test(passwords.new)) {
      notify("Include at least one number and one special character.");
      return;
    }

    if (passwords.new !== passwords.confirm) {
      notify("The new passwords do not match.");
      return;
    }

    notify("Password form validated. Connect a backend to change your real password.");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const removeSession = (id) => {
    setSessions((oldSessions) =>
      oldSessions.filter((session) => session.id !== id)
    );
    notify("Session removed from this page.");
  };

  const handleProfileImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      notify("Profile image preview updated.");
    }
  };

  const handleDeleteAccount = () => {
    if (!confirmDelete) {
      notify("Please confirm that you want to delete your account.");
      return;
    }

    notify("Demo only: connect a secure backend to delete an account.");
    setConfirmDelete(false);
  };

  return (
    <div className="patient-app">
      {/* Main page */}
      <div className={`page-area ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        {/* Fixed header */}
        <header className="top-header">
          <div className="header-left">
            <div className="breadcrumb">
              <Home size={15} />
              <span>/</span>
              <span>Accountsetting</span>
            </div>
            <h2>Accountsetting</h2>
          </div>

          <button
            className="header-menu-button"
            type="button"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
            title="Show or hide sidebar"
          >
            <Menu size={22} />
          </button>

          <div className="header-actions">
            <label className="header-search">
              <Search size={18} />
              <input
                type="search"
                placeholder="Type here..."
                onChange={(e) => {
                  if (e.target.value.trim()) {
                    setNotice(`Search: ${e.target.value}`);
                  }
                }}
              />
            </label>
            <button
              type="button"
              className="header-action"
              onClick={() => notify("Log out requires authentication setup.")}
            >
              <UserCircle size={17} />
              <span>Log out</span>
            </button>
            <button
              type="button"
              className="icon-button"
              title="Settings"
              onClick={() => goToSection("profile")}
            >
              <SettingsIcon size={18} />
            </button>
            <button
              type="button"
              className="icon-button"
              title="Notifications"
              onClick={() => notify("You have no new notifications.")}
            >
              <Bell size={18} />
            </button>
          </div>
        </header>

        <main className="settings-layout">
          {/* Settings navigation */}
          <aside className="settings-nav">
            {settingItems.map(({ label, icon: Icon, id }) => (
              <button
                key={id}
                type="button"
                className={`settings-nav-link ${activeSetting === id ? "active" : ""}`}
                onClick={() => goToSection(id)}
              >
                <Icon size={17} />
                <span>{label}</span>
              </button>
            ))}
          </aside>

          {/* Settings content */}
          <div className="settings-content">
            {notice && (
              <div className="notice" role="status">
                <CheckCircle size={18} />
                <span>{notice}</span>
                <button
                  type="button"
                  aria-label="Close message"
                  onClick={() => setNotice("")}
                >
                  <X size={17} />
                </button>
              </div>
            )}

            {/* Profile */}
            <section className="profile-card settings-section" id="profile">
              <label className="profile-avatar" title="Change profile photo">
                {profileImage ? (
                  <img src={profileImage} alt="Profile preview" />
                ) : (
                  <UserCircle size={46} />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImage}
                  hidden
                />
              </label>

              <div className="profile-details">
                <h3>{form.firstName || "Alec"} {form.lastName || "Thompson"}</h3>
                <p>Patient</p>
              </div>

              <label className="visibility-control">
                <span>Switch to<br />invisible</span>
                <input
                  type="checkbox"
                  checked={!visible}
                  onChange={() => setVisible(!visible)}
                />
                <span className="toggle-track" />
              </label>
            </section>

            {/* Basic information */}
            <section className="settings-card settings-section" id="basic-info">
              <h3>Basic Info</h3>

              <form onSubmit={saveBasicInfo}>
                <div className="form-grid">
                  <label className="field">
                    <span>First Name</span>
                    <input name="firstName" value={form.firstName} onChange={updateForm} />
                  </label>

                  <label className="field">
                    <span>Last Name</span>
                    <input name="lastName" value={form.lastName} onChange={updateForm} />
                  </label>

                  <label className="field">
                    <span>I'm</span>
                    <select name="gender" value={form.gender} onChange={updateForm}>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Prefer not to say</option>
                    </select>
                  </label>

                  <div className="field">
                    <span>Birth Date</span>
                    <div className="birth-grid">
                      <select name="month" value={form.month} onChange={updateForm}>
                        {[
                          "January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"
                        ].map((month) => <option key={month}>{month}</option>)}
                      </select>

                      <select name="day" value={form.day} onChange={updateForm}>
                        {Array.from({ length: 31 }, (_, i) => String(i + 1)).map((day) =>
                          <option key={day}>{day}</option>
                        )}
                      </select>

                      <select name="year" value={form.year} onChange={updateForm}>
                        {Array.from({ length: 100 }, (_, i) => String(2026 - i)).map((year) =>
                          <option key={year}>{year}</option>
                        )}
                      </select>
                    </div>
                  </div>

                  <label className="field">
                    <span>Email</span>
                    <input type="email" name="email" value={form.email} onChange={updateForm} />
                  </label>

                  <label className="field">
                    <span>Blood Group</span>
                    <select name="bloodGroup" value={form.bloodGroup} onChange={updateForm}>
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) =>
                        <option key={group}>{group}</option>
                      )}
                    </select>
                  </label>

                  <label className="field">
                    <span>Your Location</span>
                    <input name="location" value={form.location} onChange={updateForm} />
                  </label>

                  <label className="field">
                    <span>Phone Number</span>
                    <input type="tel" name="phone" value={form.phone} onChange={updateForm} />
                  </label>

                  <label className="field">
                    <span>Height</span>
                    <input name="height" value={form.height} onChange={updateForm} placeholder="Height" />
                  </label>

                  <label className="field">
                    <span>Weight</span>
                    <input name="weight" value={form.weight} onChange={updateForm} placeholder="Weight" />
                  </label>
                </div>

                <div className="card-footer">
                  <button className="primary-button" type="submit">SAVE CHANGES</button>
                </div>
              </form>
            </section>

            {/* Change password */}
            <section className="settings-card settings-section" id="change-password">
              <h3>Change Password</h3>

              <form onSubmit={updatePassword}>
                {[
                  { key: "current", label: "Current Password" },
                  { key: "new", label: "New Password" },
                  { key: "confirm", label: "Confirm New Password" }
                ].map(({ key, label }) => (
                  <label className="field password-field" key={key}>
                    <span>{label}</span>
                    <div className="password-input-wrap">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder={label === "confirm" ? "Confirm Password" : label}
                        value={passwords[key]}
                        onChange={(e) => setPasswords({
                          ...passwords,
                          [key]: e.target.value
                        })}
                      />
                      {key === "new" && (
                        <button
                          type="button"
                          className="password-eye"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label="Show or hide password"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      )}
                    </div>
                  </label>
                ))}

                <div className="password-bottom">
                  <div className="password-requirements">
                    <h3>Password requirements</h3>
                    <p>Please follow this guide for a strong password</p>
                    <ul>
                      <li>One special character</li>
                      <li>Min 6 characters</li>
                      <li>One number (2 are recommended)</li>
                      <li>Change it often</li>
                    </ul>
                  </div>

                  <button type="submit" className="primary-button">
                    UPDATE PASSWORD
                  </button>
                </div>
              </form>
            </section>

            {/* Two-factor authentication */}
            <section className="settings-card settings-section" id="two-factor">
              <div className="section-heading">
                <h3>Two-factor authentication</h3>
                <span className={`status-badge ${security.smsEnabled ? "enabled" : "disabled"}`}>
                  {security.smsEnabled ? "ENABLED" : "DISABLED"}
                </span>
              </div>

              <div className="security-row">
                <div>
                  <strong>Security keys</strong>
                  <p>{security.securityKey ? "Security key added" : "No Security keys"}</p>
                </div>
                <button
                  className="outline-button"
                  type="button"
                  onClick={() => {
                    setSecurity({ ...security, securityKey: !security.securityKey });
                    notify(security.securityKey ? "Security key removed from demo." : "Demo security key added.");
                  }}
                >
                  {security.securityKey ? "REMOVE" : "ADD"}
                </button>
              </div>

              <div className="security-row">
                <div>
                  <strong>SMS number</strong>
                  <p>{security.smsEnabled ? security.sms : "SMS verification disabled"}</p>
                </div>
                <button
                  className="outline-button"
                  type="button"
                  onClick={() => {
                    setSecurity({ ...security, smsEnabled: !security.smsEnabled });
                    notify("SMS setting updated for this demo.");
                  }}
                >
                  {security.smsEnabled ? "EDIT" : "ENABLE"}
                </button>
              </div>

              <div className="security-row">
                <div>
                  <strong>Authenticator app</strong>
                  <p>{security.authenticator ? "Configured" : "Not Configured"}</p>
                </div>
                <button
                  className="outline-button"
                  type="button"
                  onClick={() => {
                    setSecurity({ ...security, authenticator: !security.authenticator });
                    notify("Authenticator demo setting updated.");
                  }}
                >
                  {security.authenticator ? "DISABLE" : "SET UP"}
                </button>
              </div>
            </section>

            {/* Sessions */}
            <section className="settings-card settings-section" id="sessions">
              <h3>Sessions</h3>
              <p className="section-description">
                This is a list of devices that have logged into your account.
                Remove any sessions you do not recognize.
              </p>

              {sessions.length === 0 && <p>No sessions to display.</p>}

              {sessions.map((session) => (
                <div className="session-row" key={session.id}>
                  <div className="device-icon">
                    {session.device === "Mobile phone" ?
                      <Smartphone size={23} /> : <Monitor size={23} />}
                  </div>

                  <div className="session-info">
                    <strong>{session.name}</strong>
                    <p>{session.location}</p>
                  </div>

                  {session.active && <span className="status-badge enabled">ACTIVE</span>}

                  <button
                    type="button"
                    className="text-button"
                    onClick={() => notify(`${session.name} — ${session.location}`)}
                  >
                    See more <ChevronRight size={15} />
                  </button>

                  {!session.active && (
                    <button
                      type="button"
                      className="session-remove"
                      title="Remove session"
                      onClick={() => removeSession(session.id)}
                    >
                      <Trash2 size={17} />
                    </button>
                  )}
                </div>
              ))}
            </section>

            {/* Delete account */}
            <section className="settings-card danger-card settings-section" id="delete-account">
              <h3>Delete Account</h3>
              <p>
                Deleting your account is a serious action. Make sure you understand
                the consequences before continuing.
              </p>

              <label className="confirm-delete">
                <input
                  type="checkbox"
                  checked={confirmDelete}
                  onChange={(e) => setConfirmDelete(e.target.checked)}
                />
                I understand that this action cannot be easily undone.
              </label>

              <button
                type="button"
                className="danger-button"
                onClick={handleDeleteAccount}
              >
                <Trash2 size={17} /> DELETE ACCOUNT
              </button>
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
