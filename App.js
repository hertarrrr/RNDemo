/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
const test_mnemonic = "mobile found obey beach example steak prepare lend chunk lunch vocal fragile"

import { generateMnemonic, validateMnemonic } from "./wallet/mnemonic";
import { Wallet } from "./wallet/wallet"
import { useState } from "react"

const App: () => Node = () => {
  const [msg, setMsg] = useState("")
  const mnemonic = generateMnemonic()
  const valid = validateMnemonic(mnemonic)
  const eth = Wallet.fromMnemonic(test_mnemonic)
  const pri_eth = Wallet.fromPrivateKey(eth.privateKey())

  const randeth = Wallet.fromMnemonic(mnemonic)
  console.log(eth.log())
  console.log(pri_eth.log())
  let t =  ""
  pri_eth.sign("hello, spike").then((res) => {
    setMsg(res)
  })
  if(valid) {
    return (
      <SafeAreaView>
        <Section children={randeth.address()} title={randeth.privateKey()} />
        <Section children={pri_eth.address()} title={pri_eth.privateKey()} />
        <Section children={"hello, spike"} title={msg} />
      </SafeAreaView>
    )
  }
  else {
    return (
      <SafeAreaView>
        <Section children={pri_eth.address()} title={pri_eth.privateKey()} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
