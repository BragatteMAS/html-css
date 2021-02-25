import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of the application
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo'
      theme: ThemeData(
        PrimarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ), // ThemeData
      home: MyHome(title: 'Flutter Demo Home Page'),
    ); //MaterialApp
  }
}

Ref(https://www.youtube.com/watch?v=J4BVaXkwmM8),