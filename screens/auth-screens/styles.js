import { Platform, StyleSheet } from "react-native"
import { COLORS } from "../../constants/theme"


const styles = StyleSheet.create({
    role_container:{
        marginTop:40,
        marginTop:20,
        width:'90%',
        alignSelf:'center'
    },
    continue_txt:{
        fontFamily:'CabinRegular',
        fontSize: 18,
        color:'#424242',
        textAlign:'center'
    },
    continue_dr_txt:{
        textDecorationLine:'underline',
        color: COLORS.blue,
        fontFamily:'CabinSemiBold',
        textAlign:'center',
        fontSize:20
    },
    login_txt:{
        fontFamily:'CabinSemiBold',
        fontSize:26,
        color:'#141414'
    },
    auth_inputs_container:{
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:6
    },
    main_input:{
        borderBottomColor:'#DADADA',
        borderBottomWidth:2,
        marginTop:20
    },
    input_placeholder:{
        fontSize:16,
        fontFamily:'CabinRegular',
        color:'#7D7D7D',
    },
    forgot_txt:{
        fontSize: Platform.OS == 'android' ? 13 : 14,
        fontFamily:'CabinBold',
        color: COLORS.blue,
        textAlign:'center'
    },
    login_with_txt:{
        fontSize:15,
        fontFamily:'CabinRegular',
        color:'#878787',
        textAlign:'center'
    },
    social_login_container:{
        marginTop:20,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    social_btn:{
        backgroundColor:'#FAFAFA',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:10,
        borderWidth:1,
        borderColor:'#CFCFCF',
        width:80
    },
    new_platform_cont:{
        flexDirection:'row',
        alignSelf:'center',
        marginVertical:20
    },
    newPlatTxt:{
        fontSize:Platform.OS == 'android' ? 13 : 14,
        fontFamily:'CabinMedium',
        color:'#000',
    }
})

export default styles
