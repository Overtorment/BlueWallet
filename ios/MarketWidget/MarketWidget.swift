//
//  MarketWidget.swift
//  MarketWidget
//
//  Created by Marcos Rodriguez on 10/29/20.
//  Copyright © 2020 BlueWallet. All rights reserved.
//

import WidgetKit
import SwiftUI

let textColor = Color("TextColor")
let emptyMarketData = MarketData(nextBlock: "...", sats: "...", price: "...")

struct Provider: TimelineProvider {
  func placeholder(in context: Context) -> SimpleEntry {
    SimpleEntry(date: Date(), marketData: emptyMarketData)
  }
     
  func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
    let entry: SimpleEntry
    if (context.isPreview) {
      entry = SimpleEntry(date: Date(), marketData: MarketData(nextBlock: "26", sats: "9 134", price: "$10 000"))
    } else {
      entry = SimpleEntry(date: Date(), marketData: emptyMarketData)
    }
    completion(entry)
  }
  
  func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {

    var entries: [SimpleEntry] = []
    let userPreferredCurrency = API.getUserPreferredCurrency();
    var marketDataEntry = MarketData(nextBlock: "...", sats: "...", price: "...")
    API.fetchMarketData(currency: userPreferredCurrency, completion: { (result, error) in
      let entry: SimpleEntry
      if let result = result {
        entry = SimpleEntry(date: Date(), marketData: result)
 
      } else {
        entry = SimpleEntry(date: Date(), marketData: marketDataEntry)
      }
      entries.append(entry)
      let timeline = Timeline(entries: entries, policy: .atEnd)
      completion(timeline)
    })
  }
}

struct SimpleEntry: TimelineEntry {
  let date: Date
  let marketData: MarketData
}

struct MarketWidgetEntryView : View {
  var entry: Provider.Entry
  @State var userPreferredCurrency: String = API.getUserPreferredCurrency()
  
  var body: some View {
    VStack(alignment: .leading, spacing:23 , content: {
      VStack(alignment: .leading, spacing: /*@START_MENU_TOKEN@*/nil/*@END_MENU_TOKEN@*/, content: {
        Text("Market").font(.headline).foregroundColor(textColor).bold()
        Spacer()
        HStack(alignment: .center, spacing: 0, content: {
                Text("Next Block").bold().lineLimit(1).font(Font.system(size:11, weight: .medium, design: .default)).foregroundColor(textColor)
          Spacer()
            Text(entry.marketData.formattedNextBlock).padding(EdgeInsets(top: 2, leading: 4, bottom: 2, trailing: 4)).lineLimit(1).foregroundColor(.white).font(Font.system(size:11, weight: .semibold, design: .default)).background(Color(red: 0.29, green: 0.86, blue: 0.73)).overlay(
              RoundedRectangle(cornerRadius: 4.0)
                .stroke(Color(red: 0.29, green: 0.86, blue: 0.73), lineWidth: 4.0))
          })

        Spacer()
        HStack(alignment: .center, spacing: 0, content: {
          Text("Sats/Dollar").bold().lineLimit(1).font(Font.system(size:11, weight: .medium, design: .default)).foregroundColor(textColor)
          Spacer()
          Text(entry.marketData.sats == "..." ? "..." : entry.marketData.sats).padding(EdgeInsets(top: 2, leading: 4, bottom: 2, trailing: 4)).lineLimit(1).foregroundColor(.white).font(Font.system(size:11, weight: .semibold, design: .default)).background(Color(red: 0.97, green: 0.21, blue: 0.38)).overlay(
            RoundedRectangle(cornerRadius: 4.0)
              .stroke(Color(red: 0.97, green: 0.21, blue: 0.38), lineWidth: 4.0))
        })
        Spacer()
        HStack(alignment: .center, spacing: 0, content: {
          Text("Price").bold().lineLimit(1).font(Font.system(size:11, weight: . medium, design: .default)).foregroundColor(textColor)
          Spacer()
          Text(entry.marketData.price == "..." ? "..." : entry.marketData.price).padding(EdgeInsets(top: 2, leading: 4, bottom: 2, trailing: 4)).lineLimit(1).foregroundColor(.white).font(Font.system(size:11, weight: .semibold, design: .default)).background(Color(red: 0.29, green: 0.86, blue: 0.73)).overlay(
            RoundedRectangle(cornerRadius:4.0)
              .stroke(Color(red: 0.29, green: 0.86, blue: 0.73), lineWidth: 4.0))
        })
      }).padding(EdgeInsets(top: 18, leading: 11, bottom: 18, trailing: 11))
    }).background(Color("WidgetBackground"))
  }
}

@main
struct MarketWidget: Widget {
  let kind: String = "MarketWidget"
  
  var body: some WidgetConfiguration {
    StaticConfiguration(kind: kind, provider: Provider()) { entry in
      MarketWidgetEntryView(entry: entry)
    }
    .configurationDisplayName("Market")
    .description("Stay up to date with network prices.").supportedFamilies([.systemSmall])
  }
}

struct MarketWidget_Previews: PreviewProvider {
  static var previews: some View {
    MarketWidgetEntryView(entry: SimpleEntry(date: Date(), marketData: MarketData(nextBlock: "26", sats: "9 134", price: "$10 000")))
      .previewContext(WidgetPreviewContext(family: .systemSmall))
  }
}


struct MarketData {
  var nextBlock: String
  var sats: String
  var price: String
  
  var formattedNextBlock: String {
    return nextBlock == "..." ? "..." : #"\#(nextBlock) sat/b"#
  }
}

