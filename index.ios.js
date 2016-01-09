/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    NavigatorIOS,
    TouchableHighlight,
    WebView,
    ScrollView
} = React;

var QIITA_URL = "https://qiita.com/api/v2/tags/reactjs/items";
var QIITAPAGE = require('./qiitapage.js');
var AUTH_URL;

// ベースのUINavigationControllerに該当するもの
var ReactQiitaNavigator = React.createClass({
            render: function() {
                    return ( < NavigatorIOS style = {
                                styles.navigator
                            }
                            initialRoute = {
                                {
                                    component: ReactQiitaList,
                                    title: 'ReactQiita',
                                }
                            }
                            />
                                                          );
                                                            }
                                                            })

//起動後に認証処理
							    //
							    //
							    //
//




							    //
							    //

// 記事一覧リスト
                            var ReactQiitaList = React.createClass({
                                        getInitialState: function() {
                                            return {
                                                items: new ListView.DataSource({
                                                    rowHasChanged: (row1, row2) => row1 !== row2,
                                                }),
                                                loaded: false,
                                                auth: false,
						loginned:false
                                            };
                                        },
					
                                        componentDidMount: function() {
                                            this.fetchData();
                                        },

                                        render: function() {
                                            if (!this.state.loaded) {
                                                return this.renderLoadingView();
                                            }

                                            if (!this.state.auth) {}

                                            return ( < ListView dataSource = {
                                                    this.state.items
                                                }
                                                renderRow = {
                                                    this.renderItem
                                                }
                                                style = {
                                                    styles.listView
                                                }
                                                />
                                      );
                                        },

  renderLoadingView: function() {
      return (
            <View style={styles.container}>
                    <Text>
                              Loading movies...
                                      </Text >
                                                < /View>
                                                );
                                                  },

  renderItem: function(item, sectionID, rowID) {
      return (
            <TouchableHighlight  onPress={() => this.onPressed(item)}>
                  <View style={styles.container}>
                          <Image
                                    source={{uri: item.user.profile_image_url}}
                                              style={styles.thumbnail}/ >
                                                < View style = {
                                                    styles.rightContainer
                                                } >
                                                < Text style = {
                                                    styles.title
                                                } > {
                                                    item.title
                                                } < /Text>
                                                                          <Text style={styles.name}>{item.user.id}</Text >
                                                < /View>
                                                                                        </View >
                                                < /TouchableHighlight>
                                                                                                  );
                                                                                                    },

  // API呼び出し 
  fetchData: function() {
                                                    fetch(QIITA_URL)
                                                        .then((response) => response.json())
                                                        .then((responseData) => {
                                                            this.setState({
                                                                items: this.state.items.cloneWithRows(responseData),
                                                                loaded: true,
                                                            });
                                                        })
                                                        .done();
  						//this.auth();                                              
  },

                                                //認証確認機能							      
                                            /*    auth: function() {

                                                    fetch('http://localhost:3000', {
                                                        method: 'GET',
                                                        headers: {
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json',
                                                        },
                                                     //   body: JSON.stringify({
                                                      //      firstParam: 'yourValue',
                                                      //      secondParam: 'yourOtherValue',
                                                      //  })
                                                    })
                                                },
*/
                                                //セルのタッチイベント
                                                onPressed: function(item) {
                                                    this.props.navigator.push({
                                                        title: item.title,
                                                        component: ReactQiitaItemView,
                                                        passProps: {
                                                            url: item.url
                                                        }
                                                    })
                                                },
                                            });

                                        // 記事閲覧用のWebView
                                        var ReactQiitaItemView = React.createClass({

                                            render: function() {
                                                return ( < View style = {
                                                        styles.container
                                                    } >
                                                    < Text style = {
                                                        styles.title
                                                    } >
                                                    GETTTTTTTTT

                                                    < /Text>
                                                                                          </View >
                                                );
                                            }
                                        });

                                        // 各種デザイン要素
                                        var styles = StyleSheet.create({
                                            navigator: {
                                                flex: 1
                                            },
                                            container: {
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#FFFFFF',
                                            },
                                            rightContainer: {
                                                flex: 1,
                                            },
                                            title: {
                                                fontSize: 15,
                                                margin: 8,
                                                textAlign: 'left',
                                            },
                                            name: {
                                                fontSize: 12,
                                                margin: 8,
                                                textAlign: 'left',
                                            },
                                            thumbnail: {
                                                width: 80,
                                                height: 80,
                                                margin: 2,
                                            },
                                            listView: {
                                                backgroundColor: '#FFFFFF',
                                            },
                                        });



                                        AppRegistry.registerComponent('ReactQiitaNavigator', () => ReactQiitaNavigator);
