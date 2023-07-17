import { API_BASE_URL } from './config';

export const API_URLS = {
    Service_Name_Get_All_Data: `${API_BASE_URL}/ServiceName/GetAllData`,
    Service_Name_Save_Update_Data: `${API_BASE_URL}/ServiceName/SaveUpdateData`,
    Service_Name_Get_Edit_Data: `${API_BASE_URL}/ServiceName/GetSelectedData`,
    Service_Name_Delete_Selected_Data: `${API_BASE_URL}/ServicePrice/DeleteSelectedData`,
    
    FAQ_Get_All_Data: `${API_BASE_URL}/FAQ/GetAllData`,
    FAQ_Save_Update_Data: `${API_BASE_URL}/FAQ/SaveUpdateData`,
    FAQ_Get_Edit_Data: `${API_BASE_URL}/FAQ/GetSelectedData`,
    FAQ_Delete_Selected_Data: `${API_BASE_URL}/FAQ/DeleteSelectedData`,

    Service_Price_Get_All_Data: `${API_BASE_URL}/ServicePrice/GetAllData`,
    Service_Price_Save_Update_Data: `${API_BASE_URL}/ServicePrice/SaveUpdateData`,
    Service_Price_Get_Edit_Data: `${API_BASE_URL}/ServicePrice/GetSelectedData`,
    Service_Price_Delete_Selected_Data: `${API_BASE_URL}/ServicePrice/DeleteSelectedData`,

    Contact_Get_All_Data: `${API_BASE_URL}/Contact/GetAllData`,
    Contact_Save_Update_Data: `${API_BASE_URL}/Contact/SaveUpdateData`,
    Contact_Get_Edit_Data: `${API_BASE_URL}/Contact/GetSelectedData`,
    Contact_Delete_Selected_Data: `${API_BASE_URL}/Contact/DeleteSelectedData`,
  };