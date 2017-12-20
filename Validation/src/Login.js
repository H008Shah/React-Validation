/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    Button,
    TouchableHighlight,
    KeyboardAvoidingView,
    View,
    ScrollView
} from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            confirmpassword: '',


        }

    }

    handle_username = (text) => {
        this.setState({ username: text });
    }

    handle_name = (text) => {
        this.setState({ name: text });
    }

    handle_email = (text) => {
        this.setState({ email: text });
    }

    handle_password = (text) => {
        this.setState({ password: text });
    }

    handle_confirmpassword = (text) => {
        this.setState({ confirmpassword: text });
    }


    fun_getvalidation() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        if (this.state.username.length == 0 && this.state.name.length == 0 && this.state.email.length == 0 &&
            this.state.password.length == 0 && this.state.confirmpassword.length == 0) {
            alert("All fields are required");
        }
        else if (this.state.username.length == 0) {
            alert("Enter username");
        }
        else if (this.state.name.length == 0) {
            alert("Enter name");
        }
        else if (this.state.email.length == 0) {
            alert("Enter Email");
        }
        else if (this.state.password.length == 0) {
            alert("Enter Password");
        }
        else if (this.state.confirmpassword.length == 0) {
            alert("Enter confirmpassword");
        }
        else if (this.state.password.length < 4) {
            alert("Password  minimum 4 character long");
        }
        else if (this.state.password != this.state.confirmpassword) {
            alert("Password and confirmpassword does not match");
        }
        else if (re.test(this.state.email) == false) {
            alert("Enter Valid Email Address");
        }
        else {
            alert("Successfull!!!");

        }

    }

    render() {


        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                style={styles.main}>
                <View style={styles.container}>

                    <View style={styles.bg_style}>

                        <TextInput
                            style={styles.text_input_style}
                            returnKeyType={"next"}
                            ref="username"
                            blurOnSubmit={false}
                            editable={true}
                            keyboardType="default"
                            placeholder="User Name"
                            autoCapitalize="none"
                            placeholderTextColor="#EFEBE950"
                            underlineColorAndroid='transparent'
                            maxLength={40}
                            onChangeText={this.handle_username}
                            onSubmitEditing={(event) => {
                                this.refs.name.focus();
                            }}
                        >

                        </TextInput>



                        <TextInput
                            style={styles.text_input_style}
                            returnKeyType={"next"}
                            ref="name"
                            blurOnSubmit={false}
                            editable={true}
                            keyboardType="default"
                            placeholder="Name"
                            autoCapitalize="none"
                            placeholderTextColor="#EFEBE950"
                            underlineColorAndroid='transparent'
                            maxLength={40}
                            onChangeText={this.handle_name}
                            onSubmitEditing={(event) => {
                                this.refs.email.focus();
                            }}
                        >

                        </TextInput>

                        <TextInput
                            style={styles.text_input_style}
                            returnKeyType={"next"}
                            ref="email"
                            blurOnSubmit={false}
                            editable={true}
                            keyboardType="email-address"
                            placeholder="Email-Id"
                            autoCapitalize="none"
                            placeholderTextColor="#EFEBE950"
                            underlineColorAndroid='transparent'
                            maxLength={40}
                            onChangeText={this.handle_email}
                            onSubmitEditing={(event) => {
                                this.refs.password.focus();
                            }}
                        >

                        </TextInput>

                        <TextInput
                            style={styles.text_input_style}
                            returnKeyType={"next"}
                            ref="password"
                            blurOnSubmit={false}
                            editable={true}
                            keyboardType="default"
                            placeholder="Password"
                            autoCapitalize="none"
                            placeholderTextColor="#EFEBE950"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            maxLength={40}
                            onChangeText={this.handle_password}
                            onSubmitEditing={(event) => {
                                this.refs.confirmpassword.focus();
                            }}
                        >

                        </TextInput>


                        <TextInput
                            style={styles.text_input_style}

                            ref="confirmpassword"
                            editable={true}
                            keyboardType="default"
                            placeholder="Confirm Password"
                            autoCapitalize="none"
                            placeholderTextColor="#EFEBE950"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            maxLength={40}
                            onChangeText={this.handle_confirmpassword}
                        >

                        </TextInput>



                    </View>

                    <TouchableHighlight style={styles.btn_style} onPress={() => this.fun_getvalidation()}
                        underlayColor='#311B92'>
                        <Text style={styles.text_style}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    main: {

        flexGrow: 1,
        backgroundColor: '#0091EA',
    },

    header: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#01579B',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0091EA',
    },


    bg_style: {
        backgroundColor: '#7C4DFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: '#7C4DFF',
        borderRadius: 10,
        alignSelf: 'stretch'

    },
    btn_style: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 60,
        backgroundColor: '#4527A0',
        borderWidth: 1,
        borderColor: '#00000000',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    text_style: {

        textAlign: 'center',

        color: '#ffffff',

    },
    text_input_style: {

        marginTop: 10,
        marginLeft: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 10,
        color: '#ffffff',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#EFEBE950',
        borderRadius: 5,

    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default Login