import { CalendarFilled, CalendarOutlined } from '@ant-design/icons'
import { Badge, Card, List } from 'antd'
import { Text } from '../text'
import { useState } from 'react'
import UpcomingEventsSkeleton from '../skeleton/upcoming-events'

const UpcomingEvents = () => {
    const [isLoarding, setIsLoading] = useState(true);
    
    return (
        <Card
            style={{ height: '100%' }}
            headStyle={{ padding: '8px 16px' }}
            bodyStyle={{ padding: '0 1rem' }}
            title={
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}>
                    <CalendarOutlined />
                    <Text size="sm" style={{ marginLeft: "0.7rem" }}>
                        Upcoming Events
                    </Text>
                </div>
            }
        >
            {isLoarding ? (
                <List
                itemLayout="horizontal"
                dataSource={Array.from({ length: 5 }).map((_, index) => ({
                    id: index,
                
                }))}
                renderItem={() => <UpcomingEventsSkeleton />}
                />
                ) : (
                    <List
                        itemLayout='horizontal'
                        dataSource={[]}
                        renderItem={(item) => {
                        const renderDate = getData{item.startDate, item.endDate}
                            return (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Badge color={item.color} />}
                                        title={<Text size='xs'>item.title</Text>}
                                        description={<Text ellipsis={{ tooltip: true}}
                                        strong>
                                            {item.title}
                                        </Text>
                                        }
                                    />
                                </List.Item>
                            )
                        }}
                    />
                    
                )}
        </Card>
    )
}
export default UpcomingEvents