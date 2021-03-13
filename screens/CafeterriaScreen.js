import { View,  ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import styled, { css } from '@emotion/native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Table, TableWrapper, Row, Col, Rows, Cell } from 'react-native-table-component';
const CafeterriaScreen = ({navigation}) => {
  const tableHead = ['오늘조식','오늘중식','오늘석식','내일조식','내일중식', '내일석식']
  const tableTitle = ['오늘조식', '오늘중식', '오늘석식','내일조식', '내일중식', '내일석식']
  const tableDATA = [
  ['이건조식1', '이건중식1', '이건석식1', '얘도조식1', '얘도중식1', '얘도석식1'],
  ['이건조식2', '이건중식2', '이건석식2', '얘도조식2', '얘도중식2', '얘도석식2'],
  ['이건조식3', '이건중식3', '이건석식3', '얘도조식3', '얘도중식3', '얘도석식3'],
  ['이건조식4', '이건중식4', '이건석식4', '얘도조식4', '얘도중식4', '얘도석식4'],
  ['이건조식5', '이건중식5', '이건석식5', '얘도조식5', '얘도중식5', '얘도석식5'],
  ['이건조식6', '이건중식6', '이건석식6', '얘도조식6', '얘도중식6', '예도석식6']]

  const element = (data, index) => (
    <View>
      <View style={css`width: 100%; height: 100px;`, {borderBottomWidth: 2, borderBottomColor: '#F0F0F0'}}>
      <Text style={css`font-family: 'NanumSquareB'; font-size: 14px; color: #474747;`}>
        　
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
                6974
              </Text>
            </View>

            <Text
              style={css`
                font-size: 21px;
                margin-left: 22px;
                margin-top: 22px;
                font-family: 'NanumSquareEB';
              `}>
              급식표
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
              레이와 3년 시발월 시발일
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


    <View
        style={css`
            display: flex;
            flex-direction: column;
        `}
    >

<Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                    <Icon name="enviroment" size={24} color="#2AB2D3" />오늘의 조식
                </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #000000;
                    font-size: 15px;
                  `}>
                      민트초코귀뚜라미솔의눈비빔밥
                                      </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                    <Icon name="enviroment" size={24} color="#2AB2D3" />오늘의 중식
                </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #000000;
                    font-size: 15px;
                  `}>
                      초코버터김치찜, 민트초코밥
                                      </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                    <Icon name="enviroment" size={24} color="#2AB2D3" />오늘의 석식
                </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #000000;
                    font-size: 15px;
                  `}>
                      박한준
                                      </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                    <Icon name="enviroment" size={24} color="#2AB2D3" />내일의 조식
                </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #000000;
                    font-size: 15px;
                  `}>
                      백호고기, 맥콜국밥
                                      </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                    <Icon name="enviroment" size={24} color="#2AB2D3" />내일의 중식
                </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #000000;
                    font-size: 15px;
                  `}>
                      지코국밥, 수르수트뢰밍
                                      </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #2ab2d3;
                    font-size: 15px;
                  `}>
                    <Icon name="enviroment" size={24} color="#2AB2D3" />내일의 석식
                </Text>
                <Text
                  style={css`
                    font-family: 'NanumSquareEB';
                    font-weight: bold;
                    color: #000000;
                    font-size: 15px;
                  `}>
                      (손성민 특식) 숙주해산물매운볶음
                                      </Text>
    </View>


    </ScrollView>
  );
}
export default CafeterriaScreen;