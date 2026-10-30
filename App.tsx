
import React, { useMemo, useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";

import OrderCard from "./components/OrderCard";
import { sampleOrders } from "./data/orders";

import type {
  Order,
  OrderFilter,
} from "./types/order";

const filters: OrderFilter[] = [
  "All",
  "New",
  "In progress",
  "Completed",
];

export default function App() {
  const [activeFilter, setActiveFilter] =
    useState<OrderFilter>("All");

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  const filteredOrders = useMemo(() => {
    if (activeFilter === "All") {
      return sampleOrders;
    }

    return sampleOrders.filter(
      (order) => order.status === activeFilter
    );
  }, [activeFilter]);

  const newCount = sampleOrders.filter(
    (order) => order.status === "New"
  ).length;

  const progressCount = sampleOrders.filter(
    (order) => order.status === "In progress"
  ).length;

  if (selectedOrder) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#F5F7FB"
        />

        <ScrollView
          contentContainerStyle={styles.detailsContainer}
        >
          <Pressable
            onPress={() => setSelectedOrder(null)}
            style={styles.backButton}
          >
            <Text style={styles.backText}>
              {"←"} Back to orders
            </Text>
          </Pressable>

          <Text style={styles.detailsTitle}>
            Order details
          </Text>

          <View style={styles.detailsCard}>
            <Text style={styles.detailLabel}>
              Order reference
            </Text>
            <Text style={styles.detailValue}>
              #{selectedOrder.id}
            </Text>

            <Text style={styles.detailLabel}>
              Order status
            </Text>
            <Text style={styles.detailValue}>
              {selectedOrder.status}
            </Text>

            <Text style={styles.detailLabel}>
              Placed at
            </Text>
            <Text style={styles.detailValue}>
              {selectedOrder.placedAt}
            </Text>

            <Text style={styles.detailLabel}>
              Items
            </Text>
            <Text style={styles.detailValue}>
              {selectedOrder.itemCount}
            </Text>

            <Text style={styles.detailLabel}>
              Store
            </Text>
            <Text style={styles.detailValue}>
              {selectedOrder.storeName}
            </Text>

            <Text style={styles.detailLabel}>
              Payment method
            </Text>
            <Text style={styles.detailValue}>
              {selectedOrder.paymentMethod}
            </Text>

            <Text style={styles.detailLabel}>
              Total amount
            </Text>
            <Text style={styles.detailPrice}>
              ₹{selectedOrder.total.toLocaleString(
                "en-IN",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundcolur="#F5F7FB"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.appName}>aasPass</Text>
            <Text style={styles.greeting}>
              Good morning, Vendor
            </Text>
            <Text style={styles.subtitle}>
              Manage your store orders
            </Text>
          </View>

          <View style={styles.profileIcon}>
            <Text style={styles.profileLetter}>V</Text>
          </View>
        </View>

        {/* Summary cards */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>
              New orders
            </Text>
            <Text style={styles.newCount}>
              {newCount}
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>
              In progress
            </Text>
            <Text style={styles.progressCount}>
              {progressCount}
            </Text>
          </View>
        </View>

        {/* Orders heading */}
        <Text style={styles.sectionTitle}>
          Orders
        </Text>

        {/* Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
          contentContainerStyle={styles.filterRow}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={[
                  styles.filterButton,
                  isActive && styles.activeFilter,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.activeFilterText,
                  ]}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Order list */}
        <View style={styles.orderList}>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onPress={setSelectedOrder}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>✓</Text>
              <Text style={styles.emptyTitle}>
                No {activeFilter.toLowerCase()} orders
              </Text>
              <Text style={styles.emptyMessage}>
                {activeFilter === "New"
                  ? "No new orders right now."
                  : "There are no orders in this category yet."}
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.sampleNote}>
          Sample data for design only. Not live order data.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  appName: {
    fontSize: 14,
    fontWeight: "800",
    color: "#235DD8",
    marginBottom: 8,
  },
  greeting: {
    fontSize: 23,
    fontWeight: "800",
    color: "#172033",
  },
  subtitle: {
    fontSize: 13,
    color: "#737B8C",
    marginTop: 6,
  },
  profileIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#DDEBFF",
    alignItems: "center",
    justifyContent: "center",
  },
  profileLetter: {
    fontSize: 17,
    fontWeight: "800",
    color: "#235DD8",
  },
  summaryRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8EBF0",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#737B8C",
    fontWeight: "600",
  },
  newCount: {
    fontSize: 30,
    fontWeight: "800",
    color: "#D97706",
    marginTop: 10,
  },
  progressCount: {
    fontSize: 30,
    fontWeight: "800",
    color: "#235DD8",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 14,
  },
  filterScroll: {
    marginBottom: 18,
    flexGrow: 0,
  },
  filterRow: {
    gap: 8,
    paddingRight: 8,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E0E5ED",
    backgroundColor: "#FFFFFF",
  },
  activeFilter: {
    backgroundColor: "#235DD8",
    borderColor: "#235DD8",
  },
  filterText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5F6878",
  },
  activeFilterText: {
    color: "#FFFFFF",
  },
  orderList: {
    marginTop: 2,
  },
  emptyState: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8EBF0",
  },
  emptyIcon: {
    fontSize: 28,
    color: "#235DD8",
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#172033",
    textAlign: "center",
  },
  emptyMessage: {
    fontSize: 13,
    color: "#737B8C",
    marginTop: 8,
    textAlign: "center",
    lineHeight: 20,
  },
  sampleNote: {
    fontSize: 11,
    color: "#8A92A1",
    textAlign: "center",
    marginTop: 8,
  },
  detailsContainer: {
    padding: 20,
    paddingBottom: 32,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    marginBottom: 18,
  },
  backText: {
    color: "#235DD8",
    fontSize: 14,
    fontWeight: "700",
  },
  detailsTitle: {
    fontSize: 25,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 20,
  },
  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8EBF0",
  },
  detailLabel: {
    fontSize: 12,
    color: "#737B8C",
    marginTop: 18,
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    
    color: "#172033",
    fontWeight: "600",
  },
  detailPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#235DD8",
  },
});
