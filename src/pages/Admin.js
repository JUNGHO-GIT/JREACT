import React, {useRef, useEffect} from "react";
import "../App.css";

const Admin = () => {
	const SERVER_URL = "";
	const GOOGLE_URL = "";
	// 관리자 여부를 확인하는 state를 선언합니다.
	const [isAdmin, setIsAdmin] = useState(false);

	// 컴포넌트가 마운트되었을 때 관리자 여부를 확인하는 함수를 호출합니다.
	useEffect(() => {
		checkAdminAccess();
	}, []);

	// 관리자 여부를 확인하는 함수를 작성합니다. (예: 서버에 요청하여 확인)
	const checkAdminAccess = async () => {
		// 여기에서 관리자 여부를 확인하는 로직을 작성합니다.
		// 예를 들어, 서버에 요청을 보내서 관리자 권한이 있는지 확인합니다.
		const response = await fetch("/api/check-admin");
		const data = await response.json();

		if (data.isAdmin) {
			setIsAdmin(true);
		}
	};

	// 관리자 권한이 있는 경우에만 특정 작업을 수행하는 함수를 작성합니다.
	const adminAction = () => {
		if (isAdmin) {
			// 관리자가 페이지에 접속했을 때 수행되어야 하는 로직을 작성합니다.
			console.log("관리자가 페이지에 접속했습니다.");
		} else {
			console.log("관리자가 아닙니다.");
		}
	};

	// 관리자 권한이 있는 경우에만 특정 컴포넌트를 렌더링합니다.
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
