import { StyleSheet } from "react-native";

export const loginButton = StyleSheet.create({
    loginButton: {
        marginTop: 48,
        backgroundColor: '#FF8DA8',
        borderRadius: 12,
    },
    loginButtonText: {
        color: '#fff',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    },  
})
export const loginJoinButton = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: '#eee',
        fontSize: 12,
    },
    linkText: {
        color: '#FF8DA8',
        fontWeight: 'bold',
    },
})
export const lostButton = StyleSheet.create({
    lostButtonTextWrap: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: '#eee',
        fontSize: 12,
    },
    lostButtonText: {
        color: '#FF8DA8',
        fontWeight: 'bold',
    },
})