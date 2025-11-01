'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '@/types';

interface MapComponentProps {
  pickup?: Location;
  drop?: Location;
  height?: string;
}

export default function MapComponent({ pickup, drop, height = '400px' }: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const pickupMarkerRef = useRef<L.Marker | null>(null);
  const dropMarkerRef = useRef<L.Marker | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView([12.9716, 77.5946], 13);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    // Custom icon for markers
    const createIcon = (color: string) => {
      return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });
    };

    // Update pickup marker
    if (pickup) {
      if (pickupMarkerRef.current) {
        pickupMarkerRef.current.setLatLng([pickup.lat, pickup.lng]);
      } else {
        pickupMarkerRef.current = L.marker([pickup.lat, pickup.lng], {
          icon: createIcon('#10b981'),
        })
          .addTo(map)
          .bindPopup(`<b>Pickup:</b><br>${pickup.address}`);
      }
    }

    // Update drop marker
    if (drop) {
      if (dropMarkerRef.current) {
        dropMarkerRef.current.setLatLng([drop.lat, drop.lng]);
      } else {
        dropMarkerRef.current = L.marker([drop.lat, drop.lng], {
          icon: createIcon('#ef4444'),
        })
          .addTo(map)
          .bindPopup(`<b>Drop:</b><br>${drop.address}`);
      }
    }

    // Draw route line
    if (pickup && drop) {
      if (routeLineRef.current) {
        map.removeLayer(routeLineRef.current);
      }
      routeLineRef.current = L.polyline(
        [
          [pickup.lat, pickup.lng],
          [drop.lat, drop.lng],
        ],
        {
          color: '#eab308',
          weight: 4,
          opacity: 0.7,
          dashArray: '10, 10',
        }
      ).addTo(map);

      // Fit bounds to show both markers
      const bounds = L.latLngBounds([
        [pickup.lat, pickup.lng],
        [drop.lat, drop.lng],
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (pickup) {
      map.setView([pickup.lat, pickup.lng], 14);
    } else if (drop) {
      map.setView([drop.lat, drop.lng], 14);
    }
  }, [pickup, drop]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height, width: '100%' }}
      className="rounded-lg shadow-lg z-0"
    />
  );
}
