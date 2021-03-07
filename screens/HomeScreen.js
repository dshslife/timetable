import { View,  ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import styled, { css } from '@emotion/native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';
const HomeScreen = ({navigation}) => {
  const tableHead = ['','월','화','수','목','금']
  const tableTitle = ['1교시','2교시','3교시','4교시','5교시','6교시','7교시']
  const tableDATA = [
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서']]
  return (
    <ScrollView
      style={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      `}>
      <View
        style={
          (css`
            display: flex;
            flex-direction: row;
            width: 100%;
          `,
          {
            borderBottomColor: '#C2C2C2',
            borderBottomWidth: 2,
            flexDirection: 'row',
            alignContent: 'center',
          })
        }>
        <View
          style={css`
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
          `}>
          <Text
            style={css`
              font-size: 15px;
              margin-top: 5px;
              margin-left: 10px;
              font-family: 'NanumSquareEB';
            `}>
            30929 황성식
          </Text>

          <View
            style={css`
              position: absolute;
              right: 0;
            `}>
            <TouchableWithoutFeedback>
              <Text>logout</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>

      {/* 전체시간표 + 지도보기 버튼 */}
      <View>
        <View
          style={css`
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
          `}>
          <View>
            <Text
              style={css`
                font-size: 21px;
                margin-left: 22px;
                margin-top: 52px;
                font-family: 'NanumSquareEB';
              `}>
              전체 시간표
            </Text>

            <Text
              style={css`
                font-size: 13px;
                color: #a8a8a8;
                font-weight: bold;
                margin-top: 11px;
                margin-left: 22px;
                margin-bottom: 15px;
                font-family: 'NanumSquareEB';
              `}>
              2021년 시발월 시발일
            </Text>
          </View>

          <View
            style={css`
              position: absolute;
              right: 0;
            `}>
            <TouchableWithoutFeedback>
              <Text
                style={css`
                  font-family: 'NanumSquareEB';
                  font-weight: bold;
                  color: #2ab2d3;
                  font-size: 15px;
                  margin-left: 22px;
                `}>
                지도보기 <Icon name="enviroment" size={15} color="#2AB2D3" />
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>

      {/* 요일 + 시간표 */}
      <View>
        {/* 요일 */}
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={tableHead} flexArr={[1, 1, 1, 1, 1, 1]} />
          <TableWrapper style={{flexDirection: 'row'}}>
            <Col data={tableTitle} style={{flex: 1}} heightArr={[28, 28]} />
            <Rows data={tableDATA} flexArr={[1, 1, 1, 1, 1]} />
          </TableWrapper>
        </Table>

        {/* 시간표 */}
        <View>
          {/* 시간표 내부 */}
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
}
export default HomeScreen;
/* 
일단 문법 알려줄게

div = View
Text = 텍스트
TouchableWithoutFeedback = button
Image = image

이정도면 다 만들음 ㅇㅇ
css 문법 쓰는법은
style={css`
여기다가 치면됨
ㅇㅇ
내가 예시로 일단 보여줌
`}
ㄱㄷㄱㄷ 애뮬킴
아 ㅅㅂ 메인보드 바꿔서 애뮬 새로설정해야함
ㄱㄷㄱㄷ

*/