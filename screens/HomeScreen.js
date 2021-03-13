import { View,  ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import styled, { css } from '@emotion/native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Table, TableWrapper, Row, Col, Rows, Cell } from 'react-native-table-component';
const HomeScreen = ({navigation}) => {
  const tableHead = ['','월','화','수','목','금']
  const tableTitle = ['1교시','2교시','3교시','4교시','5교시','6교시','7교시']
  const tableDATA = [
  ['물리I', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서']]

  const element = (data, index) => (
    <View>
      <View style={css`width: 100%; height: 100px;`, {borderBottomWidth: 2, borderBottomColor: '#F0F0F0'}}>
      <Text style={css`font-family: 'NanumSquareB'; font-size: 14px; color: #474747;`}>
        {data}
      </Text>
    </View>
    <View style={css`width: 100%; height: 50px;`}>
      <Text style={css`font-family: 'NanumSquareB'; font-size: 14px; color: #2AB2D3;`}>
        {data}
      </Text>
    </View>
    </View>
  )
  return (
    <ScrollView
      style={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      `}>
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
            <View
              style={css`
                font-size: 21px;
                margin-left: 22px;
                margin-top: 21px;
                font-family: 'NanumSquareEB';
                background-color: #a8a8a8;
              `}>
              <Text
                style={css`
                  color: white;
                `}>
                30929
              </Text>
            </View>

            <Text
              style={css`
                font-size: 21px;
                margin-left: 22px;
                margin-top: 22px;
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
            <View
              style={css`
                margin-right: 22px;
                margin-top: 37px;
              `}>
              <TouchableWithoutFeedback>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                  지도보기 <Icon name="enviroment" size={24} color="#2AB2D3" />
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
      <Table borderStyle={{borderColor: 'transparent'}}>
        <Row data={tableHead} style={{height: 40}} />
        {tableDATA.map((rowData, index) => (
          <TableWrapper key={index} style={{flexDirection: 'row'}}>
            <Cell
              key={index}
              data={'1교시'}
              style={css`
                flex: 1;
              `}
            />
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={element(cellData, index)}
                style={css`
                  flex: 1;
                  height: 150px;
                `}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </ScrollView>
  );
}
export default HomeScreen;