import React, {useRef, useEffect} from "react";

// ------------------------------------------------------------------------------------------------>
const Admin = () => {
  const SERVER_URL = "";
  const GOOGLE_URL = "";
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    checkAdminAccess();
  }, []);
  const checkAdminAccess = async () => {
    const response = await fetch("/api/check-admin");
    const data = await response.json();
    if (data.isAdmin) {
      setIsAdmin(true);
    }
  };

  // ---------------------------------------------------------------------------------------------->
  const adminAction = () => {
    if (isAdmin) {
      console.log("관리자가 페이지에 접속했습니다.");
    }
    else {
      console.log("관리자가 아닙니다.");
    }
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <div>
      <h1>관리자 페이지</h1>
      {isAdmin ? (
        <>
          <p>환영합니다, 관리자님!</p>
          <button onClick={adminAction}>관리자 작업 수행</button>
        </>
      ) : (
        <p>접근 권한이 없습니다.</p>
      )}
    </div>
  );
};
export default Admin;
