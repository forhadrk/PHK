import { API_BASE_URL } from './config';

export const API_URLS = {
    Service_Name_Get_All_Data: `${API_BASE_URL}/ServiceName/GetAllData`,
    Service_Name_Save_Update_Data: `${API_BASE_URL}/ServiceName/SaveUpdateData`,
    Service_Name_Get_Edit_Data: `${API_BASE_URL}/ServiceName/GetSelectedData`,
    Service_Name_Delete_Selected_Data: `${API_BASE_URL}/ServiceName/DeleteSelectedData`,
    
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

    Category_Wise_Service_Name_Data: `${API_BASE_URL}/ServicePrice/GetServiceNames`,
    Category_Wise_Service_Save_Data: `${API_BASE_URL}/ServicePrice/SaveCategoryWiseService`,
    Category_Wise_Selected_Service_Data: `${API_BASE_URL}/ServicePrice/GetSelectedServiceNames`,


    ACTIVE_SERVICE_NAMES: `${API_BASE_URL}/ServiceName/GetAllActiveServiceNames`,
    ACTIVE_SERVICE_CATEGORY: `${API_BASE_URL}/ServiceName/GetAllActiveServiceCategory`,
    ACTIVE_SERVICE_WISE_CATEGORY_LIST: `${API_BASE_URL}/ServiceName/GetServiceCategoryWiseList`,

    LOAD_SELECTED_SERVICE_PRICE: `${API_BASE_URL}/ServicePrice/GetSelectedServicePrice`,
    LOAD_SELECTED_SERVICE_PRICE_DETAILS: `${API_BASE_URL}/ServicePrice/GetSelectedServicePriceDetails`,

    LOAD_LOGIN_USER: `${API_BASE_URL}/login/LoginUser`,

    LOAD_BOOKING_SERVICE_WISE_CATERORY: `${API_BASE_URL}/ServicePrice/GetServiceWisePrice`,
    LOAD_BOOKING_OTHER_SERVICES: `${API_BASE_URL}/Booking/GetOtherServices`,
    SAVE_UPDATE_BOOKING: `${API_BASE_URL}/Booking/SaveUpdateBooking`,

    Service_Category_Price_Get_All_Data: `${API_BASE_URL}/ServiceCategoryPrice/GetAllData`,
    Service_Category_Price_Save_Update_Data: `${API_BASE_URL}/ServiceCategoryPrice/SaveUpdateData`,
    Service_Category_Price_Get_Edit_Data: `${API_BASE_URL}/ServiceCategoryPrice/GetSelectedData`,
    Service_Category_Price_Delete_Selected_Data: `${API_BASE_URL}/ServiceCategoryPrice/DeleteSelectedData`,

    Service_Category_Price_Details_Get_All_Data: `${API_BASE_URL}/ServiceCategoryPriceDetails/GetAllData`,
    Service_Category_Price_Details_Save_Update_Data: `${API_BASE_URL}/ServiceCategoryPriceDetails/SaveUpdateData`,
    Service_Category_Price_Details_Get_Edit_Data: `${API_BASE_URL}/ServiceCategoryPriceDetails/GetSelectedData`,
    Service_Category_Price_Details_Delete_Selected_Data: `${API_BASE_URL}/ServiceCategoryPriceDetails/DeleteSelectedData`,
    Service_Category_Price_Details_Selected_Service_Prices_Data: `${API_BASE_URL}/ServiceCategoryPriceDetails/GetSelectedServicePrices`,

    Users_Get_All_Data: `${API_BASE_URL}/users/GetAllData`,
    Users_Save_Update_Data: `${API_BASE_URL}/users/SaveUpdateData`,
    Users_Get_Edit_Data: `${API_BASE_URL}/users/GetSelectedData`,
    Users_Delete_Selected_Data: `${API_BASE_URL}/users/DeleteSelectedData`,
    
  };