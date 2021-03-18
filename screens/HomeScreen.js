import { View,  ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import styled, { css } from '@emotion/native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Table, TableWrapper, Row, Col, Rows, Cell } from 'react-native-table-component';
const HomeScreen = ({navigation}) => {
  const tableHead = ['','월','화','수','목','금']
  const tableTitle = ['1','2','3','4','5','6','7']
  const tableDATA = [
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서'],
  ['독서', '독서', '독서', '독서', '독서']]

  const element = (data, index) => (
    <View style={css`background-color: #FFFFFF;`}>
      <View style={css`width: 100%; height: 100px;`, {borderBottomWidth: 2, borderRightWidth: 2, borderRightColor: '#F8F8F8', borderBottomColor: '#F8F8F8'}}>
      <Text style={css`font-weight: bold; height:40px; font-family: 'NanumSquareB'; font-size: 14px; color: #474747; margin-left: 10px; margin-top: 12px; margin-bottom:10px; font-weight: bold;`}>
        {data}
      </Text>
      </View>

    <View style={css`background-color: #FFFFFF;`}>
      <View style={css`width: 100%; height: 50px;`,{borderRightWidth: 2, borderRightColor: '#F8F8F8'}}>
      <Text style={css`font-weight: bold; height:38px; font-family: 'NanumSquareB'; font-size: 13px; color: #2AB2D3; margin-top: 7px; margin-left: 10px;`}>
        {data}
      </Text>
      </View>
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
      <View style={css`background-color: #FFFFFF;`}>
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
                width: 90px;
              `}>
              <Text
                style={css`
                  color: white;
                  margin-left: 3px;
                `}>
                30929 황성식
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
                margin-left: 23px;
                margin-bottom: 15px;
                font-family: 'NanumSquareEB';
              `}>
              2021년 3월 18일
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
      </View>
      <Table style={{borderColor: 'transparent'}}>
        <Row data={tableHead} style={{height: 27}} />
        {tableDATA.map((rowData, index) => (
          <TableWrapper key={index} style={{flexDirection: 'row'}}>
            <View style={css`margin-left: 11px; margin-right: 10px; font-size: 20px;`}>
            <Cell
              key={index}
              data={'1'}
              style={css`margin-top: 9px;`}
            />
            </View>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={element(cellData, index)}
                style={css`
                  flex: 1;
                  height: 114px;
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