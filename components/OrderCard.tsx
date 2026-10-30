
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import type { Order } from "../types/order";

type OrderCardProps = {
  order: Order;
  onPress: (order: Order) => void;
};

export default function OrderCard({
  order,
  onPress,
}: OrderCardProps) {
  const statusStyle =
    order.status === "New"
      ? styles.newStatus
      : order.status === "In progress"
      ? styles.progressStatus
      : styles.completedStatus;

  return (
    <Pressable
      style={styles.card}
      onPress={() => onPress(order)}
      accessibilityRole="button"
      accessibilityLabel={`View order ${order.id}`}
    >
      <View style={styles.topRow}>
        <View style={styles.orderInfo}>
          <Text style={styles.orderId}>
            Order #{order.id}
          </Text>
          <Text style={styles.time}>
            Placed at {order.placedAt}
          </Text>
        </View>

        <View style={[styles.statusBadge, statusStyle]}>
          <Text style={styles.statusText}>
            {order.status}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.itemInfo}>
        {order.itemCount}{" "}
        {order.itemCount === 1 ? "item" : "items"}
        {" · "}
        {order.storeName}
      </Text>

      <Text style={styles.payment}>
        {order.paymentMethod}
      </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>
          ₹{order.total.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>

        <Text style={styles.viewDetails}>
          View details {"→"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E8EBF0",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172033",
  },
  time: {
    fontSize: 12,
    color: "#737B8C",
    marginTop: 5,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  newStatus: {
    backgroundColor: "#FFF0D9",
  },
  progressStatus: {
    backgroundColor: "#DDEBFF",
  },
  completedStatus: {
    backgroundColor: "#DDF7E7",
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#26354A",
  },
  divider: {
    height: 1,
    backgroundColor: "#EDF0F4",
    marginVertical: 14,
  },
  itemInfo: {
    fontSize: 13,
    color: "#4F596B",
  },
  payment: {
    fontSize: 12,
    color: "#737B8C",
    marginTop: 6,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 8,
  },
  price: {
    fontSize: 19,
    fontWeight: "800",
    color: "#172033",
  },
  viewDetails: {
    fontSize: 12,
    fontWeight: "700",
    color: "#235DD8",
  },
});
