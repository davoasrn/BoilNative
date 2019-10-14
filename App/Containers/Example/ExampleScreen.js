import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import ExampleActions from 'App/Stores/Example/Actions'
import { user, userIsLoadingSel, userErrorMessageSel, liveInEuropeSel } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'
import { Images } from 'App/Theme'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ExampleActions.fetchUser());
  }, [dispatch]);

  _fetchUser = () => {
    dispatch(ExampleActions.fetchUser());
  };

  const userData = useSelector(user);
  const userIsLoading = useSelector(userIsLoadingSel);
  const userErrorMessage = useSelector(userErrorMessageSel);
  const liveInEurope = useSelector(liveInEuropeSel);

  return (
    <View style={Style.container}>
      {userIsLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={Style.logoContainer}>
            <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
          </View>
          <Text style={Style.text}>To get started, edit App.js</Text>
          <Text style={Style.instructions}>{instructions}</Text>
          {userErrorMessage ? (
            <Text style={Style.error}>{userErrorMessage}</Text>
          ) : (
            <View>
              <Text style={Style.result}>
                {"I'm a fake user, my name is "}
                {userData.name}
              </Text>
              <Text style={Style.result}>
                {liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
              </Text>
            </View>
          )}
          <Button onPress={() => this._fetchUser()} title="Refresh" />
        </View>
      )}
    </View>
  )

}
